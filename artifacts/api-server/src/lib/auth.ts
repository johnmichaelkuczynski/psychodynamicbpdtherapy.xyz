import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import session from "express-session";
import connectPgSimple from "connect-pg-simple";
import type { Express } from "express";
import { pool } from "@workspace/db";
import { logger } from "./logger";
import {
  getUserById,
  getUserByGoogleId,
  getUserByEmail,
  createUserWithGoogle,
  updateUserGoogle,
  type AuthUser,
} from "./authStorage";

declare global {
  namespace Express {
    interface User extends AuthUser {}
  }
}

// Google sign-in is optional — the course itself has no server-side route
// gating (see api-auth-model memory). This only lets a visitor persist an
// identity across visits; nothing in the app is locked behind it.
export function setupAuth(app: Express) {
  const sanitizeSecret = (v?: string) =>
    (v || "").replace(/[\u00A0\u200B\u200C\u200D\uFEFF]/g, "").trim();

  const clientID = sanitizeSecret(
    process.env.GOOGLE_LOGIN_CLIENT_ID ||
      process.env.GOOGLE_OAUTH_CLIENT_ID ||
      process.env.GOOGLE_CLIENT_ID,
  );
  const clientSecret = sanitizeSecret(
    process.env.GOOGLE_LOGIN_CLIENT_SECRET ||
      process.env.GOOGLE_OAUTH_CLIENT_SECRET ||
      process.env.GOOGLE_CLIENT_SECRET,
  );

  const googleEnabled = !!(clientID && clientSecret);

  if (!googleEnabled) {
    logger.warn(
      "Google OAuth credentials not found (GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET). Google login disabled.",
    );
  }

  app.set("trust proxy", 1);

  // connect-pg-simple's createTableIfMissing reads a table.sql file that
  // esbuild does not copy into the bundled production build (ENOENT at
  // runtime), which silently prevented session persistence in production.
  // Create the table ourselves with the same schema up front instead.
  pool
    .query(`
      CREATE TABLE IF NOT EXISTS "user_sessions" (
        "sid" varchar NOT NULL COLLATE "default",
        "sess" json NOT NULL,
        "expire" timestamp(6) NOT NULL
      )
      WITH (OIDS=FALSE);
      ALTER TABLE "user_sessions" DROP CONSTRAINT IF EXISTS "session_pkey";
      ALTER TABLE "user_sessions" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;
      CREATE INDEX IF NOT EXISTS "IDX_user_sessions_expire" ON "user_sessions" ("expire");
    `)
    .then(() => {
      logger.info("Session table ready");
    })
    .catch((error) => {
      logger.error({ error }, "Failed to ensure session table");
    });

  const PgSession = connectPgSimple(session);
  const pgStore = new PgSession({
    pool,
    tableName: "user_sessions",
    createTableIfMissing: false,
    errorLog: (...args) => logger.error(args, "Session store error"),
  });

  const isProduction = process.env.NODE_ENV === "production";

  if (isProduction && !process.env.SESSION_SECRET) {
    throw new Error("SESSION_SECRET environment variable is required in production");
  }

  app.use(
    session({
      store: pgStore,
      secret: process.env.SESSION_SECRET || "bpd-101-dev-session-secret",
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: isProduction || !!process.env.REPLIT_DEV_DOMAIN,
        httpOnly: true,
        sameSite: "lax",
        maxAge: 30 * 24 * 60 * 60 * 1000,
      },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    done(null, (user as AuthUser).id);
  });

  passport.deserializeUser(async (id: number, done) => {
    try {
      const user = await getUserById(id);
      done(null, user ?? false);
    } catch (error) {
      done(error);
    }
  });

  // API server only owns the /api path (see artifact.toml routing) — the
  // OAuth callback must live under /api so the shared proxy routes it here.
  const CALLBACK_PATH = "/api/auth/google/callback";

  const getCallbackURL = () => {
    if (process.env.NODE_ENV === "production") {
      const prodDomain = (process.env.REPLIT_DOMAINS || "").split(",")[0]?.trim();
      return `https://${prodDomain}${CALLBACK_PATH}`;
    }
    if (process.env.REPLIT_DEV_DOMAIN) {
      return `https://${process.env.REPLIT_DEV_DOMAIN}${CALLBACK_PATH}`;
    }
    return `http://localhost:8080${CALLBACK_PATH}`;
  };

  const trustedHosts = new Set<string>(
    [
      ...(process.env.REPLIT_DOMAINS || "").split(",").map((d) => d.trim()),
      process.env.REPLIT_DEV_DOMAIN || "",
      "localhost:8080",
    ]
      .filter(Boolean)
      .map((h) => h.toLowerCase()),
  );

  const getRequestCallbackURL = (req: any) => {
    const host = (req.headers["x-forwarded-host"] || req.headers.host || "")
      .toString()
      .split(",")[0]
      .trim()
      .toLowerCase();
    if (host && trustedHosts.has(host)) {
      const proto = host.startsWith("localhost") ? "http" : "https";
      return `${proto}://${host}${CALLBACK_PATH}`;
    }
    return getCallbackURL();
  };

  if (googleEnabled) {
    passport.use(
      new GoogleStrategy(
        {
          clientID,
          clientSecret,
          callbackURL: getCallbackURL(),
          state: true,
          passReqToCallback: false,
        } as any,
        async (_accessToken, _refreshToken, profile, done) => {
          try {
            const email = profile.emails?.[0]?.value || null;
            const displayName = profile.displayName || null;
            const googleId = profile.id;

            let user = await getUserByGoogleId(googleId);

            if (!user) {
              const existingByEmail = email ? await getUserByEmail(email) : undefined;

              if (!existingByEmail) {
                const username = email?.split("@")[0] || `user_${googleId.substring(0, 8)}`;
                user = await createUserWithGoogle({
                  username,
                  googleId,
                  email,
                  displayName,
                });
                logger.info({ userId: user.id }, "Google OAuth: created new user");
              } else {
                user = await updateUserGoogle(existingByEmail.id, {
                  googleId,
                  displayName,
                });
              }
            } else {
              user = await updateUserGoogle(user.id, { displayName });
            }

            logger.info({ userId: user.id }, "Google OAuth: login successful");
            done(null, user);
          } catch (error) {
            logger.error({ error }, "Google auth error");
            done(error as Error);
          }
        },
      ),
    );

    const loginHandler = (req: any, res: any, next: any) =>
      passport.authenticate("google", {
        scope: ["openid", "email", "profile"],
        prompt: "select_account",
        callbackURL: getRequestCallbackURL(req),
      } as any)(req, res, next);
    app.get("/api/auth/google", loginHandler);

    const callbackHandler = [
      (req: any, res: any, next: any) =>
        passport.authenticate("google", {
          failureRedirect: "/?error=auth_failed",
          callbackURL: getRequestCallbackURL(req),
        } as any)(req, res, next),
      (req: any, res: any) => {
        req.session.save(() => {
          const basePath = process.env.QR_COURSE_BASE_PATH || "/";
          res.redirect(basePath);
        });
      },
    ];
    app.get(CALLBACK_PATH, ...callbackHandler);

    logger.info({ callbackURL: getCallbackURL() }, "Google OAuth configured");
  }

  app.get("/api/auth/user", (req, res) => {
    if (req.isAuthenticated() && req.user) {
      res.json({
        authenticated: true,
        googleEnabled,
        user: {
          id: req.user.id,
          username: req.user.username,
          email: req.user.email,
          displayName: req.user.displayName,
        },
      });
    } else {
      res.json({ authenticated: false, googleEnabled, user: null });
    }
  });

  app.post("/api/auth/logout", (req, res) => {
    req.logout((err) => {
      if (err) {
        res.status(500).json({ error: "Logout failed" });
        return;
      }
      req.session.destroy(() => {
        res.clearCookie("connect.sid");
        res.json({ success: true });
      });
    });
  });
}

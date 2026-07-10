import { useQuery, useQueryClient } from "@tanstack/react-query";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

type AuthResponse = {
  authenticated: boolean;
  googleEnabled: boolean;
  user: {
    id: number;
    username: string;
    email: string | null;
    displayName: string | null;
  } | null;
};

async function fetchAuth(): Promise<AuthResponse> {
  const res = await fetch(`${basePath}/api/auth/user`, { credentials: "include" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export function useAuth() {
  const qc = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["auth", "user"],
    queryFn: fetchAuth,
    staleTime: 60_000,
  });

  function signInWithGoogle() {
    window.location.href = `${basePath}/api/auth/google`;
  }

  async function signOut() {
    await fetch(`${basePath}/api/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
    qc.setQueryData(["auth", "user"], {
      authenticated: false,
      googleEnabled: data?.googleEnabled ?? false,
      user: null,
    });
    qc.clear();
  }

  return {
    isLoading,
    authenticated: data?.authenticated ?? false,
    googleEnabled: data?.googleEnabled ?? false,
    user: data?.user ?? null,
    signInWithGoogle,
    signOut,
  };
}

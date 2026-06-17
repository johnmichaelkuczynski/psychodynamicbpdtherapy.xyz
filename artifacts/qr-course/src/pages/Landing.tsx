import { Link } from "wouter";
import {
  BarChart3,
  BookOpen,
  MessagesSquare,
  Target,
  ClipboardCheck,
  ShieldCheck,
  Search,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Three-Depth Lessons",
    body: "Read any topic Short, Medium, or Long — same ideas, your pace.",
  },
  {
    icon: MessagesSquare,
    title: "Section-Scoped Tutor",
    body: "Ask about the exact passage you're on and get a live, grounded answer.",
  },
  {
    icon: Target,
    title: "Adaptive Practice",
    body: "Questions that get harder on a streak and ease off after a miss.",
  },
  {
    icon: ClipboardCheck,
    title: "Partial-Credit Homework",
    body: "One graded homework per section — pick your format, get written feedback.",
  },
  {
    icon: ShieldCheck,
    title: "Built-In Integrity",
    body: "Every submission is screened for AI authorship, with a clear verdict.",
  },
  {
    icon: BarChart3,
    title: "One Unit, 8 Sections",
    body: "From what OCD is all the way to a full treatment arc, start to finish.",
  },
];

const topics = [
  { n: "1.1", title: "Understanding OCD: Obsessions, Compulsions, and the Cycle" },
  { n: "1.2", title: 'The Psychodynamic View: What the Symptom Might Be "Saying"' },
  { n: "1.3", title: "The Function of the Ritual: Anxiety, Control, and Defense" },
  { n: "1.4", title: "Conflict and Ambivalence: The Engine Beneath the Symptom" },
  { n: "1.5", title: "The Therapeutic Relationship in OCD Treatment" },
  { n: "1.6", title: "Where Psychodynamic Meets the Evidence: ERP, CBT, and Integration" },
  { n: "1.7", title: "Working Through: Insight Alongside Symptom Relief" },
  { n: "1.8", title: "A Treatment Arc, Start to Finish" },
];

export default function Landing() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground flex flex-col">
      <header className="flex items-center justify-between px-6 py-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-primary-foreground">
            <Search className="w-4 h-4" />
          </div>
          <span className="font-serif font-semibold text-lg tracking-tight">
            Psychodynamic Treatment of OCD 101
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/sign-in">
            <button
              className="px-4 py-2 rounded-md text-sm font-medium border border-border hover:bg-secondary transition-colors"
              data-testid="button-sign-in"
            >
              Sign in
            </button>
          </Link>
          <Link href="/sign-up">
            <button
              className="px-4 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              data-testid="button-sign-up"
            >
              Get started
            </button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium mb-6">
            <BarChart3 className="w-3.5 h-3.5" />
            A one-unit baby course on the psychodynamic treatment of OCD
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight mb-5">
            The psychodynamic treatment of OCD — taught, tutored, drilled, and
            graded by AI.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A self-paced baby course on the psychodynamic treatment of OCD — how
            obsessions and compulsions can carry meaning, what a ritual is really
            doing, and how a depth understanding works alongside evidence-based
            ERP and CBT. You'll cover the OCD cycle, what symptoms might be
            saying, conflict and ambivalence, the therapeutic relationship,
            working through, and a full treatment arc. Plain lessons, an AI tutor,
            adaptive practice, and AI-graded homework. No background or jargon
            required.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link href="/sign-up">
              <button
                className="px-6 py-3 rounded-md text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                data-testid="button-cta-start"
              >
                Sign in with Google to start
              </button>
            </Link>
            <Link href="/sign-in">
              <button
                className="px-6 py-3 rounded-md text-base font-medium border border-border hover:bg-secondary transition-colors"
                data-testid="button-cta-signin"
              >
                I already have an account
              </button>
            </Link>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-lg border border-border bg-card p-6 flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center text-primary">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-semibold text-lg">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 pb-24">
          <h2 className="text-center font-serif font-semibold text-xl mb-6">
            The Curriculum
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {topics.map((t) => (
              <div
                key={t.n}
                className="flex items-center gap-4 rounded-lg border border-border bg-card p-5"
              >
                <div className="w-10 h-10 shrink-0 rounded-md bg-primary text-primary-foreground flex items-center justify-center font-serif font-bold text-sm">
                  {t.n}
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Topic {t.n}
                  </div>
                  <div className="font-medium">{t.title}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-6 py-6 text-center text-sm text-muted-foreground">
        Psychodynamic Treatment of OCD 101 — a baby course on the psychodynamic
        treatment of OCD, taught, tutored, drilled, and graded by AI.
      </footer>
    </div>
  );
}

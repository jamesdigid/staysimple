const features = [
  {
    title: "Automate Workflows",
    description:
      "Eliminate repetitive tasks with intelligent agents that learn your processes and run them reliably.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
  {
    title: "Integrate Everything",
    description:
      "Connect your existing tools — CRMs, email, spreadsheets, and APIs — into one seamless automation layer.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
        />
      </svg>
    ),
  },
  {
    title: "Scale Effortlessly",
    description:
      "Grow without adding headcount. Our AI solutions adapt as your business evolves and demands increase.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
        />
      </svg>
    ),
  },
] as const;

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">


      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-24 sm:pb-32 sm:pt-32">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-200/60 via-blue-100/30 to-transparent blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 inline-block rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-primary">
            AI Automation for Modern Businesses
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl sm:leading-tight">
            Keep it simple.
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Automate everything.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            StaySimple.AI builds intelligent automation that fits your business —
            no complexity, no bloat. Just AI that works.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-white transition-colors hover:bg-primary-dark sm:w-auto"
            >
              Book a Demo
            </a>
            <a
              href="#features"
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-border bg-card px-8 text-base font-medium text-foreground transition-colors hover:border-zinc-300 hover:text-foreground focus-visible:border-zinc-300 focus-visible:bg-zinc-100 focus-visible:text-foreground sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-card px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Automation that delivers
            </h2>
            <p className="mt-4 text-lg text-muted">
              We handle the complexity so you can focus on what matters most.
            </p>
          </div>
        </div>
      </section>

     
    </div>
  );
}

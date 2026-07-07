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

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} StaySimple | All rights
            reserved.
          </p>
          <p className="text-sm text-slate-500">Simple AI automation</p>
        </div>
      </footer>
    </div>
  );
}

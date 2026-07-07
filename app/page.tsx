export default function Home() {
  return (
    <div className="flex h-full flex-col overflow-hidden">
      <main className="flex flex-1 items-center justify-center px-6">
        <section className="relative w-full max-w-5xl overflow-hidden py-10 text-center sm:py-14">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
        >
            <div className="absolute left-1/2 top-[-2rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-white/8 blur-3xl" />
            <div className="absolute left-1/2 top-[-1rem] h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-slate-300/10 blur-3xl" />
            <div className="absolute left-1/2 top-8 h-[30rem] w-[46rem] -translate-x-1/2 rounded-full bg-black/35 blur-[120px]" />
            <div className="absolute left-1/2 top-28 h-[10rem] w-[10rem] -translate-x-1/2 rounded-full bg-white/5 blur-2xl" />
          </div>

          <p className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-blue-200 shadow-[0_0_30px_rgba(79,140,255,0.12)] backdrop-blur">
            AI Automation for Modern Businesses
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl sm:leading-tight">
            Keep it simple.
            <br />
            <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
              Automate everything.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            StaySimple.AI builds intelligent automation that fits your business
            with less complexity, less friction, and more impact.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+15615567310"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-white shadow-[0_18px_50px_rgba(79,140,255,0.28)] transition-colors hover:bg-primary-dark sm:w-auto"
            >
              Call (561) 556-7310
            </a>
            <a
              href="#"
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-base font-medium text-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white focus-visible:border-white/20 focus-visible:bg-white/10 focus-visible:text-white sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

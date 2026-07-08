const tiles = [
  {
    title: "Workflow Automation",
    description: "Replace repetitive ops with simple, reliable AI flows.",
  },
  {
    title: "System Connections",
    description: "Connect your tools, inbox, CRM, and spreadsheets.",
  },
  {
    title: "Scale With Ease",
    description: "Grow output without growing the overhead.",
  },
] as const;

export default function Home() {
  return (
    <div className="page-shell">
      <main className="page-main">
        <section id="top" className="lander-section hero-section">
          <div className="spotlight-layer" aria-hidden="true">
            <div className="hero-glow-lg" />
            <div className="hero-glow-md" />
            <div className="hero-shadow" />
            <div className="hero-highlight" />
          </div>

          <div className="hero-content">
            <p className="eyebrow">
              AI Automation for Modern Businesses
            </p>
            <h1 className="hero-title">
              Keep it simple.
              <br />
              <span className="gradient-text">Automate everything.</span>
            </h1>
            <p className="body-copy">
              StaySimple.AI builds intelligent automation that fits your
              business with less complexity, less friction, and more impact.
            </p>
            <div className="cta-row">
              <a href="tel:+15615567310" className="btn btn-primary">
                Call (561) 556-7310
              </a>
              <a href="#tiles" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </div>
        </section>

        <section id="tiles" className="lander-section tiles-section">
          <div className="spotlight-layer" aria-hidden="true">
            <div className="tile-parallax-orb tile-orb-primary" />
            <div className="tile-parallax-orb tile-orb-secondary" />
          </div>

          <div className="tile-section-content section-content">
            <div className="section-header">
              <p className="section-kicker">What we simplify</p>
              <h2 className="section-title">
                A cleaner path to automation
              </h2>
            </div>
            <div className="tiles-grid">
              {tiles.map((tile) => (
                <article key={tile.title} className="tile-card">
                  <div className="tile-accent" />
                  <h3 className="tile-title">{tile.title}</h3>
                  <p className="tile-copy">{tile.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer className="footer-section">
          <div className="footer-content">
            <div className="subscribe-block">
              <p className="subscribe-label">Get latest news and updates</p>
              <form action="#" className="subscribe-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="subscribe-input"
              />
              <button type="submit" className="btn-secondary btn-subscribe">
                Subscribe
              </button>
            </form>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2026 StaySimple.AI. All rights reserved.</p>
              <a href="#top" className="footer-link">
                Back to top
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

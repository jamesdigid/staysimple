type Tile = {
  title: string;
  description: string;
  href?: string;
};

const tiles: Tile[] = [
  {
    title: "Amy Assistant",
    description:
      "A local AI voice assistant that wakes on amy, transcribes speech, searches the web, and can be integrated into your business ecosystem.",
    href: "https://github.com/jamesdigid/amy",
  },
  {
    title: "Intelligent Marketing Assistant (Coming Soon)",
    description: "AI-powered marketing assistance for your business.",
  },
];

export default function Home() {
  return (
    <div className="page-shell">
      <main className="page-main">
        <section id="top" className="lander-section home-section">
          <div className="spotlight-layer" aria-hidden="true">
            <div className="hero-glow-lg" />
            <div className="hero-glow-md" />
            <div className="hero-shadow" />
            <div className="hero-highlight" />
            <div className="tile-parallax-orb tile-orb-primary" />
            <div className="tile-parallax-orb tile-orb-secondary" />
          </div>

          <div className="home-grid">
            <div className="hero-content">
              <h1 className="hero-title">
                Stay Simple.
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
              </div>
            </div>

            <div id="tiles" className="tile-section-content section-content">
              <div className="section-header">
                <p className="section-kicker">What we simplify</p>
                <h2 className="section-title">Solutions for your business</h2>
              </div>
              <div className="tiles-grid">
                {tiles.map((tile) => (
                  <article key={tile.title} className="tile-card">
                    <div className="tile-accent" />
                    {tile.href ? (
                      <a
                        href={tile.href}
                        className="tile-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <h3 className="tile-title">{tile.title}</h3>
                        <p className="tile-copy">{tile.description}</p>
                      </a>
                    ) : (
                      <>
                        <h3 className="tile-title">{tile.title}</h3>
                        <p className="tile-copy">{tile.description}</p>
                      </>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="home-footer flex justify-center">
            <p>&copy; 2026 StaySimple.AI. All rights reserved.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

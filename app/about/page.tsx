import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function About() {
  return (
    <main className="page-container">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: "url('/aboutHero.png')" }}>
      <div className="hero-content">
 <div className="hero-copy">
            <div className="hero-text">
              <h1 className="hero-title">
                About Bitcoin Pro
              </h1>
              <p className="hero-description">
                BitcoinPro is an open-source project dedicated to developing and maintaining Bitcoin client software known as "BitcoinPro."
              </p>
              <p className="hero-description">
                It builds upon the legacy of the original Bitcoin software released by Satoshi Nakamoto, following the publication of the foundational Bitcoin whitepaper.
              </p>
            </div>
            <a href="/download" className="hero-btn">
              Download
            </a>
          </div>
      </div>
         
      </section>

      {/* Our Goals Section */}
      <section className="about-section">
          <div className="about-content">
            <div className="about-text">
              <div className="maintainer-block">
                <h2 className="about-title">Our Goals</h2>
                <p className="about-description">
                  We don't pick winners or promote personal agendas. Instead, we focus on supporting work that:
                </p>
                <ul className="about-description about-list">
                  <li><p>•</p> <p>Strengthens Bitcoin's security and decentralization</p></li>
                  <li><p>•</p> <p>Improves accessibility and usability without compromising core principles</p></li>
                  <li><p>•</p> <p>Advances education and research in open, verifiable ways</p></li>
                  <li><p>•</p> <p>Protects the rights of individuals to participate in the Bitcoin network freely</p></li>
                </ul>
                <p className="about-description">
                  We work closely with the community to identify high-impact projects, independent developers, and maintainers who share these values. We publish regular reports so donors can see exactly how their contributions are being used.
                </p>
              </div>
            </div>
          </div>
      </section>

      {/* How You Can Help Section */}
      <section className="maintainers-section">
        <div className="maintainers-content">
          <div className="maintainers-image">
            <img src="/BitcoinPro.png" alt="How You Can Help" className="maintainers-img" />
          </div>
          <div className="maintainers-text">
            <div className="maintainers-info">
              <div className="maintainer-block">
                <h2 className="maintainer-title">How You Can Help</h2>
                <p className="maintainer-description">
                  Bitcoin Pro is 100% donor-supported. If you care about protecting Bitcoin's freedom and want to empower the developers, researchers, and educators who keep it alive, consider making a contribution.
                </p>
                <ul className="about-description about-list "  >
                  <li><p>•</p> <p>Donate monthly to provide stable, predictable funding</p></li>
                  <li><p>•</p> <p>Sponsor specific projects or contributors</p></li>
                  <li><p>•</p> <p>Support our operations budget so we can continue our mission sustainably</p></li>
                </ul>
          
                <p className="about-description">
                  Every donation, large or small, helps defend Bitcoin's future.
                </p>
              </div>
            </div>
            <a href="#" className="btn btn-primary maintainers-btn">
              Donate to BitcoinPro
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
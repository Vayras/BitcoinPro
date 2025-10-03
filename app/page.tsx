import MobileNavbar from "@/components/mobile-navbar"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import Link from "next/link"

export default function Home() {
  return (
    <main className="page-container">
      <Navbar />
      {/* Hero Section */}
      <section className="hero-section">
          <div className="hero-copy">
            <div className="hero-text ">
              <h1 className="hero-title ">
                A Bitcoin Client That Keeps Bitcoin Simple
              </h1>
              <p className="hero-description">
                Our client is designed for those who believe Bitcoin should stay true to its original purpose: decentralized, peer-to-peer money. No bloat. No unnecessary features. Just the tools needed to keep the network secure, efficient, and censorship-resistant.
              </p>
            </div>
            <Link href="/download" className="hero-btn">
                Download
              </Link>
          </div>
      </section>

      {/* About Section */}
      <section className="about-section">
          <div className="about-content">
            <div className="about-image">
              <img src="/phone-mockup.png" alt="Bitcoin Pro App Mockup" className="about-mockup" />
            </div>
            <div className="about-text">
              <div className="about-copy">
                <h2 className="about-title">About us</h2>
                <p className="about-description">
                  Bitcoin Pro is the reference implementation of Bitcoin—free, open-source software that upholds and strengthens the Bitcoin protocol as envisioned by its creator, Satoshi Nakamoto. Rooted in the original codebase, Bitcoin Pro plays a vital role in maintaining Bitcoin's integrity and decentralization by enabling users to run full nodes that independently verify every transaction and block.
                </p>
                  <br />
                  <br />
                <p className="about-description">
                  This project doesn't just support Bitcoin—it defends it. Through the Bitcoin Pro full node and wallet, users can interact with the network in a self-sovereign way, without reliance on third parties. The project also develops and maintains foundational cryptographic tools like libsecp256k1, ensuring robust, censorship-resistant infrastructure at every level of the Bitcoin ecosystem.
                </p>
              </div>
            </div>
          </div>
      </section>

      {/* Maintainers Section */}
      <section className="maintainers-section">
        <div className="maintainers-content">
          <div className="maintainers-image">
            <img src="/maintainers-image.png" alt="Maintainers" className="maintainers-img" />
          </div>
          <div className="maintainers-text">
            <div className="maintainers-info">
              <div className="maintainer-block">
                <h2 className="maintainer-title">Maintainers</h2>
                <p className="maintainer-description">
                  Project maintainers coordinate the technical evolution of Bitcoin Pro. They review and merge contributions with a deep sense of responsibility to Bitcoin's long-term mission: a sovereign, permissionless monetary network. Their work is grounded in consensus—not hierarchy—and reflects the collective agreement of the broader contributor base.
                </p>
              </div>
              <div className="contributor-block">
                <h2 className="contributor-title">Contributors</h2>
                <p className="contributor-description">
                  Anyone who shares in Bitcoin's mission can contribute. Whether through code, testing, peer review, documentation, or localization, every contribution strengthens Bitcoin's global resilience. Contributor recognition is transparent and public, with credit given in release notes and on GitHub.
                </p>
                <p className="contributor-description">
                  Bitcoin Pro is more than just software—it's a frontline defense in the ongoing battle for monetary freedom.
                </p>
              </div>
            </div>
            <button className="btn btn-primary maintainers-btn">
              Donate to BitcoinPro
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
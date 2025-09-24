import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function RPCDocs() {
  return (
    <main className="page-container">
      <Navbar />
      
      {/* Title Section */}
      <section className="rpc-docs-section">
        <div className="rpc-docs-content">
          <div className="rpc-docs-copy">
            <p className="h4-bold lg:h3-bold">
              Bitcoin Pro RPC Docs
            </p>
            <p className="body-1-medium">
              Learn how to interact with BitcoinPro using powerful Remote Procedure Calls (RPC). This guide covers all available commands, configuration options, and examples to help you build, automate, and manage your Bitcoin node with confidence.
            </p>
          </div>
          
          {/* System Versions */}
          <div className="rpc-versions-system">
            <div className="version-item">29.0.0</div>
            <div className="version-item">28.0.0</div>
            <div className="version-item">27.0.0</div>
            <div className="version-item">27.0.0</div>
            <div className="version-item">27.0.0</div>
            <div className="version-item">27.0.0</div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
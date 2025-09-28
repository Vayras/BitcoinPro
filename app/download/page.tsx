import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import OSDownloadEntry from "@/components/OSDownloadEntry"

export default function Download() {
  return (
    <main className="page-container">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-copy">
            <div className="hero-text">
              <h1 className="hero-title">
                Download the BitcoinPro Client
              </h1>
              <p className="hero-description">
                Get the BitcoinPro Desktop and Mobile App – Secure, open-source software for all your Bitcoin needs.
              </p>
            </div>
            <button className="hero-btn">
              Download Now
            </button>
          </div>
        </div>
      </section>


    
      
      {/* Bandwidth and Storage Section */}
      <section className="verification-section">
        <div className="os-container">
              
              <span className="os-text">
                    <p className="h3-semibold ">Or choose your operating system</p>
                    <p className="body-1-medium">
                  Pick your operating system below to start your download.
                </p>
              </span>
              <div className="os-content">
                  <div className="os-column">
                    <OSDownloadEntry 
                      iconPath="./assets/icons/Frame23.svg" 
                      osName="Windows" 
                      formats="exe-zip" 
                    />
                    <OSDownloadEntry 
                      iconPath="./assets/icons/Frame24.svg" 
                      osName="Mac OS (x86_64)" 
                      formats="zip - tar.gz" 
                    />
                    <OSDownloadEntry 
                      iconPath="./assets/icons/Frame24.svg" 
                      osName="Mac OS (arm64)" 
                      formats="zip - tar.gz" 
                    />
                    <OSDownloadEntry 
                      iconPath="./assets/icons/Frame3.svg" 
                      osName="Linux" 
                      formats="zip - tar.gz" 
                    />
                  </div>
                  <div className="os-column">
                    <OSDownloadEntry 
                      iconPath="./assets/icons/Frame3.svg" 
                      osName="ARM Linux" 
                      formats="zip - tar.gz" 
                    />
                    <OSDownloadEntry 
                      iconPath="./assets/icons/Frame3.svg" 
                      osName="RISC-V Linux" 
                      formats="zip - tar.gz" 
                    />
                    <OSDownloadEntry 
                      iconPath="./assets/icons/Frame3.svg" 
                      osName="PPC64 Linux" 
                      formats="zip - tar.gz" 
                    />
                    <OSDownloadEntry 
                      iconPath="./assets/icons/Frame24.svg" 
                      osName="Snap Store Linux" 
                      formats="zip - tar.gz" 
                    />
                  </div>
              </div>
              <div>
                <p>
                  SHA256 binary hashes
                </p>
                <p>
                  HA256 hash signatures
                </p>
                <p>
                  Download torrent 
                </p>
                <p>
                  Source Code
                </p>
                <p>
                  Show version history
                </p>
              </div>
              <div>
                <p>
                  Refresh expired keys using:
                </p>
                <p>
                  gpg --keyserver hkps://keys.openpgp.org --refresh-keys
                </p>
              </div>
        </div>
        
        <div className="verification-content">
          <h2 className="verification-title">Check Your Bandwidth and Storage</h2>
          <p className="verification-description">
            BitcoinPro requires an initial download of roughly 500GB of blockchain data, plus an additional
            5-10GB each month as the network grows. By default, the full data set is stored locally, but you
            can enable pruning mode to reduce storage requirements to around 5GB without
            compromising security. For detailed setup instructions, please see the full node guide.
          </p>
          
          <h2 className="verification-title">Verify Your Download</h2>
          <p className="verification-description">
            Verifying your download isn't required but is strongly recommended. Following the verification
            steps helps ensure you haven't downloaded a corrupted or malicious version of BitcoinPro,
            which could put your funds at risk.
          </p>
          
          <p className="verification-description">Choose your platform below for step-by-step verification instructions:</p>
          
          <ul className="verification-list">
            <li>Windows verification guide</li>
            <li>macOS verification guide</li>
            <li>Linux verification guide</li>
            <li>Snap package verification guide</li>
          </ul>
          
          <h2 className="verification-title">Additional Verification with Reproducible Builds</h2>
          <p className="verification-description">
            Advanced users can also take advantage of BitcoinPro's reproducible build process and signed
            checksums published by contributors. Reproducible builds make it possible to independently
            compile identical binaries from BitcoinPro's MIT-licensed source code, matching the official
            cryptographic checksums.
          </p>
          
          <p className="verification-description">
            Multiple core builders independently reproduce and sign these builds, providing extra
            assurance that the distributed binaries are authentic. The standard verification instructions
            above check that trusted contributors have signed the same checksums included in the
            release. Rebuilding a binary yourself offers the highest level of verification available.
          </p>
          
          <p className="verification-description">
            For more details, visit the repository containing the reproducible build signatures and
            documentation.
          </p>
          
          <p className="verification-description">
            BitcoinPro is a community-driven, free and open-source software project released under the
            MIT license.
          </p>
        </div>
      </section>


      <Footer />
    </main>
  )
}
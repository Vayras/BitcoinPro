import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Contact() {
  return (
    <main className="page-container">
      <Navbar />
      
      {/* Contact Hero Section */}
      <section className="contact-hero-section">
        <div className="contact-hero-image">
          <Image 
            src="/images/send-icon.svg" 
            alt="Send icon" 
            width={72} 
            height={72}
            className="send-icon"
          />
        </div>
        
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <div className="contact-info">
            <p>BitcoinPro does not provide technical support.</p>
            <p>Community support can be found at <a style={{color: "#f7931a"}}>bitcoin.stackexchange.com</a></p>
            <br></br>
            <p>X: <a style={{color: "#f7931a"}}>@bitcoinpro</a></p>
            <br></br>
            <p>You can report bugs in our software using the issue tracker.</p>
            <br></br>
            <p>You can find BitcoinPro developers on IRC.</p>
            
            <div className="divider"></div>
            
            <p>You can import a key by running the following command with that individual's fingerprint:</p>
            <br></br>
            <code className="">gpg --keyserver hkps://keys.openpgp.org --recv-keys "&lt;fingerprint&gt;"</code>
            
            <div className="divider"></div>
            
            <div className="responsible-disclosure">
              <p><strong>Responsible Disclosure</strong></p>
              <p>To report security issues:</p>
              <p><a href="mailto:security@bitcoinpro.org">security@bitcoinpro.org</a> (not for support)</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
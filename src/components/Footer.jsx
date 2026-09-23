import { ArrowRight } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Main Footer */}
        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              KALAKRIT
            </a>

            <p className="footer-tagline">
              Language. Culture. Global.
            </p>

            <div className="footer-socials">
              <a href="#" aria-label="LinkedIn">
                in
              </a>

              <a href="#" aria-label="Instagram">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8"/>
                  <circle cx="12" cy="12" r="4" fill="none"stroke="currentColor"strokeWidth="1.8"/>
                  <circle cx="17.5"cy="6.5"r="1"fill="currentColor"/>
                </svg>
              </a>

              <a href="#" aria-label="YouTube">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="6"
                    width="18"
                    height="12"
                    rx="4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M10 9.5L15 12L10 14.5V9.5Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>

            <nav>
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#work">Case Studies</a>
              <a href="#about">About Us</a>
              <a href="#blog">Blog</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h4>Our Services</h4>

            <nav>
              <a href="#services">Translation</a>
              <a href="#services">Localization</a>
              <a href="#services">Dubbing & Voice Over</a>
              <a href="#services">Subtitling & Captioning</a>
              <a href="#services">E-learning Localization</a>
              <a href="#services">E-commerce Localization</a>
            </nav>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h4>Get in Touch</h4>

            <p>
              Let's bring your content
              <br />
              to the world.
            </p>

            <a href="#demo" className="footer-quote">
              <span>Request a Quote</span>
              <ArrowRight size={14} />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">

          <p>
            © 2026 Kalakrit. All rights reserved.
          </p>

          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
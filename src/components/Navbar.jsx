import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import kalakritLogo from "../assets/kalakrit-logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      {/* Logo */}
      <a href="#home" className="nav-logo">
        <img src={kalakritLogo} alt="Kalakrit" />
      </a>

      {/* Navigation */}
      <nav className={`navbar-links ${menuOpen ? "mobile-open" : ""}`}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#services" onClick={closeMenu}>
          Services
        </a>

        <a href="#case-studies" onClick={closeMenu}>
          Case Studies
        </a>

        <a href="#about" onClick={closeMenu}>
          About Us
        </a>

        <a href="#blog" onClick={closeMenu}>
          Blog
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </nav>

      {/* Right side */}
      <div className="navbar-right">
        <a href="#demo" className="quote-button">
          Get a Quote
          <ArrowRight size={14} />
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
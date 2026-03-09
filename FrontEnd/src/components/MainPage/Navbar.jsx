import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import Sun from "../../assets/img/sun.svg";
import Moon from "../../assets/img/moon.svg";

function Navbar() {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <div className="navbar-content">
      <div className="nav-logo">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h2>Spendly</h2>
        </Link>
      </div>

      <ul className="nav-items">
        <a href="#features" className="nav-link"><li>Features</li></a>
        <a href="#how" className="nav-link"><li>How It Works</li></a>
        <a href="#pricing" className="nav-link"><li>Pricing</li></a>
        <a href="#testimonials" className="nav-link"><li>Testimonials</li></a>

        <Link to="/dashboard" className="nav-link">
          <li>Dashboard</li>
        </Link>
      </ul>

      <div className="nav-actions">
        <button
          className="nav-theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <img
            className="nav-theme-icon"
            src={theme === "light" ? Moon : Sun}
            alt=""
          />
        </button>

        <button className="nav-login">Log In</button>
        <button className="nav-trial">Start Trial</button>

        <button
          className="nav-burger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`nav-mobile ${menuOpen ? "is-open" : ""}`}>
        <button
          className="nav-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>

        <div className="nav-mobile-links">
          <a className="nav-mobile-link" href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a className="nav-mobile-link" href="#how" onClick={() => setMenuOpen(false)}>How It Works</a>
          <a className="nav-mobile-link" href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a className="nav-mobile-link" href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>

          <Link className="nav-mobile-link" to="/dashboard" onClick={() => setMenuOpen(false)}>
            Dashboard
          </Link>
        </div>

        <div className="nav-mobile-actions">
          <button className="nav-login" onClick={() => setMenuOpen(false)}>Log In</button>
          <button className="nav-trial" onClick={() => setMenuOpen(false)}>Start Trial</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">Spendly</span>
          <p className="footer-text">Simple expense tracking. Clear financial control.</p>
        </div>

      <ul className="nav-items">
        <a href="#"><li className="nav-link">Features</li></a>
        <a href="#"><li className="nav-link">How It Works</li></a>
        <a href="#"><li className="nav-link">Pricing</li></a>
        <a href="#"><li className="nav-link">Testimonials</li></a>
      </ul>
        <div className="footer-right">
          <button className="nav-trial">Start Trial</button>
          <span className="footer-copy">© {year} Spendly</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
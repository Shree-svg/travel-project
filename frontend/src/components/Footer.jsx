function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-4">
      <div className="container">
        <p className="mb-1">
          © {new Date().getFullYear()} Kaushalya Tours & Stays
        </p>

        <p className="mb-2">
          Trusted pilgrimage & travel experiences
        </p>

        <div className="d-flex justify-content-center gap-3">
          <a href="tel:+919999999999" className="text-light">
            📞 Call
          </a>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="text-light"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
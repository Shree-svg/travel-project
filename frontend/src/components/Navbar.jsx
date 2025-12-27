function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          Kaushalya Tours & Stays
        </a>

        <a href="#book" className="btn btn-success">
          <i className="bi bi-whatsapp"></i> Book Now
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
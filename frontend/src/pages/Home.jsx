function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="section text-center">
        <div className="container">
          <h1>Kaushalya Tours & Stays</h1>
          <p className="mt-3">
            Trusted travel experiences for pilgrims and families
          </p>

          <div className="d-flex justify-content-center gap-3 mt-4">
            <a href="tel:+919999999999" className="btn btn-success">
              📞 Call Now
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-success"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-6">
              <h4>🏨 Varanasi Stay</h4>
              <p>Comfortable homestay near temples & ghats</p>
              <a href="/stays" className="btn btn-primary">
                View Stay
              </a>
            </div>

            <div className="col-md-6">
              <h4>🗺️ Nepal Tour</h4>
              <p>10-Day spiritual & scenic journey</p>
              <a href="/nepal-tour" className="btn btn-primary">
                View Tour
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section">
        <div className="container text-center">
          <h3>Why Choose Us</h3>
          <ul className="list-unstyled mt-3">
            <li>✔ Luxury 2×2 buses</li>
            <li>✔ Own chefs & hygienic food</li>
            <li>✔ Free sightseeing</li>
            <li>✔ Trusted local operator</li>
            <li>✔ Pilgrimage-friendly planning</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Home;
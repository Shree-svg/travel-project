function Stays() {
  return (
    <div className="section">
      <div className="container">
        <h2 className="text-center mb-4">Varanasi Stay</h2>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow">
              <img
                src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg1.jpg"
                alt="Gurukripa Home Stay"
                className="card-img-top"
              />

              <div className="card-body">
                <h4>Gurukripa Home Stay</h4>
                <p className="text-muted">Varanasi, Uttar Pradesh</p>

                <p>
                  Gurukripa Home Stay offers a peaceful and homely
                  environment for pilgrims and families visiting
                  Varanasi. Clean rooms, calm surroundings, and easy
                  access to temples and ghats make it an ideal choice.
                </p>

                <div className="d-grid gap-2">
                  <a
                    href="tel:+919999999999"
                    className="btn btn-success"
                  >
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

                  <a
                    href="https://www.makemytrip.com/hotels/gurukripa_home_stay-details-varanasi.html"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    View on MakeMyTrip
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MAP */}
        <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            <iframe
              title="Gurukripa Home Stay Map"
              src="https://www.google.com/maps?q=Gurukripa%20Home%20Stay%20Varanasi&output=embed"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: "12px" }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stays;
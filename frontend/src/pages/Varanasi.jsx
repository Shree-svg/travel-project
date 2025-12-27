import BookingForm from "../components/BookingForm";

function Varanasi() {
  const hotel = {
    name: "Gurukripa Home Stay",
    location: "Varanasi, Uttar Pradesh",
    phone: "+919999999999", // 🔴 REPLACE WITH REAL NUMBER
    image:
      "https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg1.jpg",
    description:
      "Gurukripa Home Stay is a peaceful and comfortable accommodation in Varanasi, ideal for pilgrims, families, and spiritual travelers. The homestay offers clean rooms, a calm environment, and easy access to major temples and ghats.",
    highlights: [
      "Peaceful homestay environment",
      "Clean & well-maintained rooms",
      "Family-friendly stay",
      "Close to temples & ghats",
      "Budget-friendly accommodation",
    ],
  };

  return (
    <div className="section fade-in">
      <div className="container">
        {/* PAGE HEADING */}
        <div className="section-title">
          <h2>Varanasi Stay</h2>
          <p>Comfortable & peaceful accommodation in the holy city</p>
        </div>

        {/* HOTEL CARD */}
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="card">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="card-img-top"
              />

              <div className="card-body">
                <span className="badge bg-success mb-2">
                  Official Home Stay
                </span>

                <h4 className="mt-2">{hotel.name}</h4>
                <p className="text-muted">{hotel.location}</p>

                <p>{hotel.description}</p>

                <h6 className="mt-3">Why choose this stay?</h6>
                <ul>
                  {hotel.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                {/* ACTION BUTTONS */}
                <div className="d-grid gap-2 mt-3">
                  <a
                    href={`tel:${hotel.phone}`}
                    className="btn btn-success"
                  >
                    📞 Call Now
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

        {/* GOOGLE MAPS */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8">
            <div className="card p-3">
              <h5 className="mb-3">Location</h5>

              <iframe
                title="Gurukripa Home Stay Location"
                src="https://www.google.com/maps?q=Gurukripa%20Home%20Stay%20Varanasi&output=embed"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* BOOKING FORM */}
        <div className="mt-5">
          <BookingForm selectedPackage="Gurukripa Home Stay – Varanasi" />
        </div>
      </div>
    </div>
  );
}

export default Varanasi;
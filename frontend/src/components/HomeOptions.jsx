import { Link } from "react-router-dom";

function HomeOptions() {
  return (
    <div className="section bg-light">
      <div className="container text-center">
        <h1 className="mb-4 fw-bold">Choose Your Category</h1>
        <p className="lead mb-5">
          Select stays or tours to explore our packages
        </p>

        <div className="row g-4">
          {/* STAYS CARD */}
          <div
            className="col-md-6"
           
          >
            <div className="card h-100 shadow">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
                className="card-img-top"
                alt="Stays"
              />
              <div className="card-body">
                <h3>Stays</h3>
                <p>Hotels & Dharamshalas across destinations</p>

                <Link to="/stays" className="btn btn-primary btn-lg w-100">
                  View Stays
                </Link>
              </div>
            </div>
          </div>

          {/* TOURS CARD */}
          <div
            className="col-md-6"
           
          >
            <div className="card h-100 shadow">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                className="card-img-top"
                alt="Tours"
              />
              <div className="card-body">
                <h3>Tours</h3>
                <p>Domestic & International Tour Packages</p>

                <Link to="/tours" className="btn btn-success btn-lg w-100">
                  View Tours
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HomeOptions;
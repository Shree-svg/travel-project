import { Link } from "react-router-dom";

function Stays() {
  return (
    <div className="section fade-in">
      <div className="container">
        <div className="section-title">
          <h2>Our Stays</h2>
          <p>Comfortable hotels and dharamshalas for a peaceful stay</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1548013146-72479768bada"
                alt="Varanasi Stay"
              />

              <div className="card-body text-center">
                <h4>Varanasi Stay</h4>
                <p className="text-muted">
                  Hotels & Dharamshalas near temples and ghats
                </p>

                <Link
                  to="/stays/varanasi"
                  className="btn btn-primary mt-2"
                >
                  View Stays
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stays;
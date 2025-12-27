import { Link } from "react-router-dom";

function Tours() {
  return (
    <div className="section">
      <div className="container">
        <Link to="/" className="btn btn-outline-secondary mb-4">
          ← Back to Home
        </Link>

        <h1 className="text-center mb-5">Available Tours</h1>

        <div className="row g-4">
          <div className="col-md-6 mx-auto">
            <div className="card shadow">
              <img
                src="https://images.unsplash.com/photo-1544735716-2e0b66b2d8a1"
                className="card-img-top"
                alt="Nepal Tour"
              />
              <div className="card-body text-center">
                <h4>Nepal Tour</h4>
                <p>Kathmandu • Pokhara • Himalayas</p>
                <Link
                  to="/tours/nepal"
                  className="btn btn-success w-100"
                >
                  View Nepal Tour
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tours;
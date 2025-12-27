function Testimonials() {
  return (
    <div className="bg-light section">
      <div className="container">
        <h2 className="text-center mb-5">What Our Customers Say</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card p-3">
              ⭐⭐⭐⭐⭐
              <p>
                Amazing experience! Everything was perfectly arranged.
              </p>
              <strong>- Rahul, Goa</strong>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3">
              ⭐⭐⭐⭐⭐
              <p>
                Best travel service we have used. Highly recommended.
              </p>
              <strong>- Sneha, Manali</strong>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3">
              ⭐⭐⭐⭐☆
              <p>
                Comfortable stay and great support throughout the trip.
              </p>
              <strong>- Aman, Delhi</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
function TourCard({ title, duration, price }) {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{duration}</p>
        <p className="fw-bold text-primary">₹{price}</p>
        <button className="btn btn-outline-primary w-100">
          Book Tour
        </button>
      </div>
    </div>
  )
}

export default TourCard

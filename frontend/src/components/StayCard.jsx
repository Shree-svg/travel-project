function StayCard({ name, location, price }) {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{location}</p>
        <p className="fw-bold text-success">₹{price}</p>
        <button className="btn btn-outline-success w-100">
          Book Stay
        </button>
      </div>
    </div>
  )
}

export default StayCard

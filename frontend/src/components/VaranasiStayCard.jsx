function VaranasiStayCard({ name, type, location, price, image, features }) {
  return (
    <div className="card h-100 shadow">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <span className="badge bg-secondary mb-2">{type}</span>
        <h5 className="card-title mt-2">{name}</h5>
        <p className="text-muted">{location}</p>

        <ul className="list-unstyled small">
          {features.map((f, i) => (
            <li key={i}>✔ {f}</li>
          ))}
        </ul>

        <p className="fw-bold text-success mt-2">
          ₹{price} / night
        </p>

        <a href="#book" className="btn btn-success w-100">
          Book Stay
        </a>
      </div>
    </div>
  );
}

export default VaranasiStayCard;
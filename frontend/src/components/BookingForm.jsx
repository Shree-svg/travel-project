import { useState } from "react";

function BookingForm({ selectedPackage = "Nepal Tour" }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://travel-backend-xay6.onrender.com/api/book",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            phone,
            packageName: selectedPackage,
            date,
          }),
        }
      );

      if (!res.ok) throw new Error("Booking failed");

      const message = `New Booking:
Name: ${name}
Phone: ${phone}
Package: ${selectedPackage}
Date: ${date}`;

      window.open(
        `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(
          message
        )}`,
        "_blank"
      );

      setName("");
      setPhone("");
      setDate("");
      alert("Booking successful!");
    } catch (err) {
      alert("Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="section">
      <div className="container">
        <div className="card p-4 mx-auto" style={{ maxWidth: 600 }}>
          <h4 className="text-center mb-3">Book Your Trip</h4>

          <form onSubmit={handleSubmit}>
            <input
              className="form-control mb-3"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              className="form-control mb-3"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <input
              type="date"
              className="form-control mb-3"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />

            <button
              className="btn btn-success w-100"
              disabled={loading}
            >
              {loading ? "Booking..." : "Book via WhatsApp"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
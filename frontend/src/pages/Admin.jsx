import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { whatsappTemplates } from "../utils/whatsappTemplates";
import "../styles/admin.css";

const API_BASE = "https://travel-backend-xay6.onrender.com";

function Admin() {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);

  const [filterDate, setFilterDate] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");

  /* 🔐 Protect Admin Page */
  useEffect(() => {
    if (!token) {
      navigate("/admin-login");
      return;
    }
    fetchBookings();
  }, []);

  /* 📥 Fetch bookings */
  const fetchBookings = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/bookings`, {
        headers: {
          Authorization: token,
        },
      });

      const data = await res.json();
      setBookings(data);
      setFilteredBookings(data);
    } catch (err) {
      alert("Failed to load bookings");
    }
  };

  /* 🔍 Filters: Date + Status + Search */
  useEffect(() => {
    let result = bookings;

    if (filterDate) {
      result = result.filter((b) => b.date === filterDate);
    }

    if (filterStatus !== "All") {
      result = result.filter((b) => b.status === filterStatus);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (b) =>
          b.name.toLowerCase().includes(term) ||
          b.phone.includes(term)
      );
    }

    setFilteredBookings(result);
  }, [filterDate, filterStatus, searchTerm, bookings]);

  /* 📊 Dashboard Stats */
  const totalCount = filteredBookings.length;
  const pendingCount = filteredBookings.filter(
    (b) => b.status === "Pending"
  ).length;
  const confirmedCount = filteredBookings.filter(
    (b) => b.status === "Confirmed"
  ).length;

  /* ✅ Confirm Booking + WhatsApp */
  const updateStatus = async (booking) => {
    try {
      await fetch(
        `${API_BASE}/api/bookings/${booking._id}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({ status: "Confirmed" }),
        }
      );

      setBookings(
        bookings.map((b) =>
          b._id === booking._id
            ? {
                ...b,
                status: "Confirmed",
                statusHistory: [
                  ...(b.statusHistory || []),
                  {
                    status: "Confirmed",
                    changedAt: new Date(),
                  },
                ],
              }
            : b
        )
      );

      const message = whatsappTemplates.confirmed({
        name: booking.name,
        date: booking.date,
        packageName: booking.packageName,
      });

      window.open(
        `https://wa.me/91${booking.phone}?text=${encodeURIComponent(
          message
        )}`,
        "_blank"
      );
    } catch {
      alert("Failed to confirm booking");
    }
  };

  /* 🗑 Delete Booking */
  const deleteBooking = async (id) => {
    if (!window.confirm("Delete this booking?")) return;

    await fetch(`${API_BASE}/api/bookings/${id}`, {
      method: "DELETE",
      headers: { Authorization: token },
    });

    setBookings(bookings.filter((b) => b._id !== id));
  };

  /* 📤 Export CSV */
  const exportCSV = () => {
    let csv =
      "Name,Phone,Package,Date,Status,Booked At\n";

    filteredBookings.forEach((b) => {
      csv += `${b.name},${b.phone},${b.packageName},${b.date},${b.status},${new Date(
        b.createdAt
      ).toLocaleString()}\n`;
    });

    const blob = new Blob([csv], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "bookings.csv";
    a.click();
  };

  /* 🚪 Logout */
  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin-login");
  };

  return (
    <div className="container my-5">
      <div className="admin-card">
        {/* HEADER */}
        <div className="admin-header mb-4">
          <h2>Admin Dashboard</h2>

          <div>
            <button
              className="btn btn-success me-2"
              onClick={exportCSV}
            >
              📤 Export CSV
            </button>

            <button
              className="btn btn-outline-danger"
              onClick={logout}
            >
              🚪 Logout
            </button>
          </div>
        </div>

        {/* 📊 STATS */}
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="admin-card text-center">
              <h6>Total</h6>
              <h3>{totalCount}</h3>
            </div>
          </div>

          <div className="col-md-4">
            <div className="admin-card text-center">
              <h6>Pending</h6>
              <h3 className="text-warning">
                {pendingCount}
              </h3>
            </div>
          </div>

          <div className="col-md-4">
            <div className="admin-card text-center">
              <h6>Confirmed</h6>
              <h3 className="text-success">
                {confirmedCount}
              </h3>
            </div>
          </div>
        </div>

        {/* 🔍 FILTERS */}
        <div className="admin-filters row g-3 mb-4">
          <div className="col-md-4">
            <label className="form-label">
              Search (Name / Phone)
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />
          </div>

          <div className="col-md-4">
            <label className="form-label">
              Filter by Travel Date
            </label>
            <input
              type="date"
              className="form-control"
              value={filterDate}
              onChange={(e) =>
                setFilterDate(e.target.value)
              }
            />
          </div>

          <div className="col-md-4">
            <label className="form-label">
              Filter by Status
            </label>
            <select
              className="form-select"
              value={filterStatus}
              onChange={(e) =>
                setFilterStatus(e.target.value)
              }
            >
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="Confirmed">Confirmed</option>
            </select>
          </div>
        </div>

        {/* TABLE */}
        {filteredBookings.length === 0 ? (
          <p>No bookings found.</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Package</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Booked At</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredBookings.map((b, index) => (
                  <tr key={b._id}>
                    <td>{index + 1}</td>
                    <td>{b.name}</td>
                    <td>{b.phone}</td>
                    <td>{b.packageName}</td>
                    <td>{b.date}</td>

                    <td>
                      <span
                        className={
                          b.status === "Confirmed"
                            ? "badge bg-success"
                            : "badge bg-warning text-dark"
                        }
                      >
                        {b.status === "Confirmed"
                          ? "✔ Confirmed"
                          : "⏳ Pending"}
                      </span>
                    </td>

                    <td>
                      {new Date(
                        b.createdAt
                      ).toLocaleString()}
                    </td>

                    <td className="action-buttons">
                      <button
                        className="btn btn-sm btn-secondary me-1"
                        onClick={() =>
                          alert(
                            b.statusHistory
                              ?.map(
                                (h) =>
                                  `${h.status} at ${new Date(
                                    h.changedAt
                                  ).toLocaleString()}`
                              )
                              .join("\n") ||
                              "No history"
                          )
                        }
                      >
                        📜 History
                      </button>

                      {b.status === "Pending" && (
                        <button
                          className="btn btn-sm btn-primary me-1"
                          onClick={() =>
                            updateStatus(b)
                          }
                        >
                          ✅ Confirm
                        </button>
                      )}

                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() =>
                          deleteBooking(b._id)
                        }
                      >
                        🗑 Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;
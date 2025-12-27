import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://travel-backend-xay6.onrender.com/api/admin/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password }),
        }
      );

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("adminToken", data.token);
        navigate("/admin");
      } else {
        alert("Invalid password");
      }
    } catch {
      alert("Login failed");
    }
  };

  return (
    <div className="section">
      <div className="container">
        <div className="card p-4 mx-auto" style={{ maxWidth: 400 }}>
          <h4 className="text-center mb-3">Admin Login</h4>

          <form onSubmit={handleLogin}>
            <input
              type="password"
              className="form-control mb-3"
              placeholder="Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
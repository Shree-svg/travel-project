import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Varanasi from "./pages/Varanasi";
import Nepal from "./pages/Nepal";

export default function App() {
  return (
    <>
      <nav className="navbar">
        <h2>Kaushalya Tours & Stays</h2>
        <div>
          <Link to="/">Home</Link>
          <Link to="/varanasi-stay">Varanasi Stay</Link>
          <Link to="/nepal-tour">Nepal Tour</Link>
          <a href="tel:+919999999999">Call</a>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/varanasi-stay" element={<Varanasi />} />
        <Route path="/nepal-tour" element={<Nepal />} />
      </Routes>

      <footer>
        © 2025 Kaushalya Tours & Stays
      </footer>
    </>
  );
}
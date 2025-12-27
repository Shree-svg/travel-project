import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeOptions from "./components/HomeOptions";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";
import Stays from "./pages/Stays";
import Tours from "./pages/Tours";
import Varanasi from "./pages/Varanasi";
import Nepal from "./pages/Nepal";
import AdminLogin from "./pages/AdminLogin";
function App() {
  const location = useLocation();

  // show booking form only on detail pages
  const showBookingForm =
  !location.pathname.startsWith("/admin") &&
  location.pathname !== "/";

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomeOptions />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/stays" element={<Stays />} />
        <Route path="/stays/varanasi" element={<Varanasi />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/nepal" element={<Nepal />} />
      </Routes>

      {showBookingForm && <BookingForm />}

      <Footer />
    </>
  );
}

export default App;
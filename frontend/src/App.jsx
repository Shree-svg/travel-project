import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Stays from "./pages/Stays";
import Nepal from "./pages/Nepal";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stays" element={<Stays />} />
        <Route path="/nepal-tour" element={<Nepal />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
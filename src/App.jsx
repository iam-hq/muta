import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Events from "./Pages/Events";
import Membership from "./Pages/Membership";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="bg-gray-50 flex flex-col h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

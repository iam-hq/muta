import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import About from "./Pages/About";

function App() {
  return (
    <div className="bg-gray-50 flex flex-col h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

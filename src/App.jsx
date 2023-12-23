import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="bg-gray-50 flex flex-col h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

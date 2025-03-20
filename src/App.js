import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./home";
import About from "./about";
import Contact from "./contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );

  
}

export default App;

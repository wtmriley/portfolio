import { Routes, Route } from "react-router-dom";
import './index.css';
import Home from "./home";
import About from "./about.js";
import Contact from "./contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

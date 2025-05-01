import { Routes, Route } from "react-router-dom";
import './index.css';
import Home from "./home";
import About from "./about.js";
import ProjectOne from "./projects/projectOne.js";
import ProjectTwo from "./projects/projectTwo.js";
import ProjectThree from "./projects/projectThree.js";
import ProjectFour from "./projects/projectFour.js";
import ProjectFive from "./projects/projectFive.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/1" element={<ProjectOne />} />
        <Route path="/project/2" element={<ProjectTwo />} />
        <Route path="/project/3" element={<ProjectThree />} />
        <Route path="/project/4" element={<ProjectFour />} />
        <Route path="/project/5" element={<ProjectFive />} />
      </Routes>
    </div>
  );
}

export default App;

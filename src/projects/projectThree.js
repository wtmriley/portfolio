import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function ProjectOne() {
    return (
        <div className="project-one">
            <Link to="/">Home</Link>
            <h1>Project Three</h1>
            <div className="footer">
                <div className="footergroup">
                <Link to="/project/2" className="footerText">Project Two</Link>
                <Link to="/project/3" className="footerText">Project Three</Link>
                <Link to="/project/4" className="footerText">Project Four</Link>
                <Link to="/project/5" className="footerText">Project Five</Link>
                </div>
            </div>
        </div>
    );
}

export default ProjectOne
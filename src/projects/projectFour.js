import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function ProjectFour() {

    return (
        <div>
            <h1>Project Four</h1>
            <Link to="/">Home</Link>
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

export default ProjectFour

import React from "react";
import "./projectFive.css";
import { Link } from "react-router-dom";

function ProjectFive() {

    return (
        <div className="all">
            <nav className="nav">
                <Link to ="/" className="navspaceText">Home</Link>
            </nav>
            <div className="p5title">
                Graphic Design
            </div>

            <div className="allWork">
                
            </div>
            <div className="footer">
                <div className="footergroup">
                <Link to="/project/2" className="footerText">Project One</Link>
                <Link to="/project/3" className="footerText">Project Two</Link>
                <Link to="/project/4" className="footerText">Project Three</Link>
                <Link to="/project/5" className="footerText">Project Four</Link>
                </div>
            </div>
        </div>
    );  
}

export default ProjectFive

import React from "react";
import { Link } from "react-router-dom";
import "./projectTwo.css";

function ProjectTwo() {
    return (
        <div className="all">
            <nav className="nav">
                <Link to ="/" className="navspaceText">Home</Link>
            </nav>

            <div className="title">
                Flash Card Web App
            </div>

            <div className="tools">
                Tools Used: 
                <ul className="toolsList">
                    <li> React</li>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </div>

            <div className="footer">
                <div className="footergroup">
                <Link to="/project/1" className="footerText">Project One</Link>
                <Link to="/project/3" className="footerText">Project Three</Link>
                <Link to="/project/4" className="footerText">Project Four</Link>
                <Link to="/project/5" className="footerText">Project Five</Link>
                </div>
            </div>

        </div>
    )
}

export default ProjectTwo
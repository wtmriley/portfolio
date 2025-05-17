import React from "react";
import "./projectFour.css";
import { Link } from "react-router-dom";

function ProjectFour() {

    return (
        <div className="all">
            <div className="nav">
                <Link to ="/" className="navspaceText">Home</Link>
            </div>

            <div className="p4title">
                iPhone Game App
            </div>

            <div className="p4vid">
                
            </div>


            <div className="p4sum">
                <div className="p4summary">
                    &nbsp; &nbsp; &nbsp;
                    the reqirement for this project was to create a game app for ios devices.  The language I used was Swift, and I wrote the app using xCode.
                </div>
            </div>

            <div className="footer">
                <div className="footergroup">
                <Link to="/project/1" className="footerText">Project One</Link>
                <Link to="/project/2" className="footerText">Project Two</Link>
                <Link to="/project/3" className="footerText">Project Three</Link>
                <Link to="/project/5" className="footerText">Project Five</Link>
                </div>
            </div>
        </div>
    );  
}

export default ProjectFour

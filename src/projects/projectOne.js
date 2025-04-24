import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function ProjectOne() {


    return (
        <div>
            <nav className="nav">
                <Link to ="/" className="navspaceText">Home</Link>
            </nav>
            <div className="mainProj1">
                <div className="p1ElevImg">
                    <img src="alignedElevatorPitchwText.png" alt="Elevator Pitch" className="elevatorPitchCard"/>
                </div>
            </div>
        </div>
    );  
}

export default ProjectOne
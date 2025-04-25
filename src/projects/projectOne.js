import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import elevatorImg from "../alignedElevatorPitchwText.png";

function ProjectOne() {


    return (
        <div>
            <nav className="nav">
                <Link to ="/" className="navspaceText">Home</Link>
            </nav>
            <div className="mainProj1">
                <div className="p1ElevImg">
                    <img src={elevatorImg} alt="Elevator Pitch" className="elProjImg1"/>
                </div>
            </div>
        </div>
    );  
}
 
export default ProjectOne
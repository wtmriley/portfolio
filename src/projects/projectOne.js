import React from "react";
import { Link } from "react-router-dom";
import "./projectOne.css";
import elevatorImg from "../alignedElevatorPitchwText.png";
import elevatorImg2 from "../ElevatorIdeation.png";

function ProjectOne() {


    return (
        <div className="headee">
            <nav className="nav">
                <Link to ="/" className="navspaceText">Home</Link>
            </nav>
            <div className="mainProj1">
                <div className="p1ElevImg">
                    <img src={elevatorImg} alt="Elevator Pitch" className="elProjImg1"/>
                </div>
                <div className="p2ElevImg">
                    <img src={elevatorImg2} alt="Elevator Pitch" className="elProjImg2"/>
                </div>
            </div>
        </div>
    );  
}
 
export default ProjectOne
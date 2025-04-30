import React from "react";
import { Link } from "react-router-dom";
import "./projectOne.css";
import elevatorImg from "../alignedElevatorPitchwText.png";
import elevatorImg2 from "../ElevatorIdeation.png";
import elevatorimg3 from "../images/p1images/elevator2.png";
import elevatorimg4 from "../images/p1images/elevatorpitchpersona.png";
import elevatorimg5 from "../images/p1images/elevato1.png";

function ProjectOne() {


    return (
        <div className="headee">
            <nav className="nav">
                <Link to ="/" className="navspaceText">Home</Link>
            </nav>
            <div className="p1title">
                <h1 className="p1title">Elevator Pitch</h1>
            </div>
            <div className="p1subtitle">
                <h2>simplifying candidate evaluations with video introductions</h2>
            </div>
            <div className="p1p1deets">
                <div className="p1p1deetsTitle">
                    <h2>My Contributions</h2>
                    <ul className="p1p1deetsa">
                        <li>Logo</li>
                        <li>Candidate side wireframes</li>
                        <li>Branding</li>
                        <li>Poster</li>
                    </ul>
                </div>

                <div className="posterimg">
                    <img src={elevatorimg3} alt="Elevator Pitch Poster" className="posterimg1r"/>
                </div>

            </div>

            <div className="persona">
                <div className="personatext">
                    <p classname="personatextr">
                        "As a job candidate, I seek a streamlined and intuitive application process that enables me to find and secure the right position quickly and effortlessly. My ideal experience removes unnecessary barriers, providing a seamless journey from application to employment."
                    </p>
                </div>
                <img src={elevatorimg4} alt="Elevator Pitch Persona" className="personaimg"/>
            </div>

            <div className="mainProj1">
                <div className="p1ElevImg">
                    <img src={elevatorImg2} alt="Elevator Pitch" className="elProjImg2"/>
                </div>
                <div className="p1ElevImg">
                    <img src={elevatorImg} alt="Elevator Pitch" className="elProjImg1"/>
                </div>
                <div className="p1ElevImg">
                    <img src={elevatorimg5} alt="Elevator Pitch" className="elProjImg3"/>
                </div>
                <div className="ElevSum">
                    <p className="ElevSum1">
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The Elevator Pitch project aimed to revolutionize the recruitment process by providing a platform where candidates can showcase their personality and skills through short video pitches. Led by a multidisciplinary team of developers as well as product, UX, and graphic designers, the project addressed common challenges faced by both job seekers and recruiters in the recruitment process.
                    </p>
                </div>
            </div>

        </div>
    );  
}
 
export default ProjectOne
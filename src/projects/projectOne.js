import React from "react";
import { Link } from "react-router-dom";
import "./projectOne.css";
import elevatorImg from "../alignedElevatorPitchwText.png";
import elevatorImg2 from "../ElevatorIdeation.png";
import elevatorimg3 from "../images/p1images/elevator2.png";
import elevatorimg4 from "../images/p1images/elevatorpitchpersona.png";
import elevatorimg5 from "../images/p1images/elevato1.png";
import elevatorimg6 from "../images/p1images/Elevator Pitch7.jpg";

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
                    <div className="p1p1deetsTitleText">
                        My Contributions
                    </div> 
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
                    <div classname="personatextr">
                        <div className="ptextR">
                        &nbsp; &nbsp; &nbsp; "As a job candidate,
                        </div>
                        I seek a streamlined and intuitive application process that enables me to find and secure the right position quickly and effortlessly. My ideal experience removes unnecessary barriers, providing a seamless journey from application to employment."
                    </div>
                </div>
                <img src={elevatorimg4} alt="Elevator Pitch Persona" className="personaimg"/>
            </div>

            <div className="mainProj1">

                <div className="ideateDiv">
                    <div className="ideation">
                        Ideation
                    </div>
                    <div className="p1ElevImg">
                        <img src={elevatorImg2} alt="Elevator Pitch" className="elProjImg2"/>
                    </div>
                </div>
                
                <div className="wireDiv">
                    <div className="wireframes">
                        wireframes
                    </div>
                    <div className="p1ElevImg">
                        <img src={elevatorimg5} alt="Elevator Pitch" className="elProjImg3"/>
                    </div>
                    <div className="p1ElevImg">
                        <img src={elevatorimg6} alt="Elevator Pitch" className="elProjImg4"/>
                    </div>
                </div>

                <div className="ElevSum">
                    <div className="ElevSum1">
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The Elevator Pitch project aimed to revolutionize the recruitment process by providing a platform where candidates can showcase their personality and skills through short video pitches. Led by a multidisciplinary team of developers as well as product, UX, and graphic designers, the project addressed common challenges faced by both job seekers and recruiters in the recruitment process.
                    </div>
                    <div className="ElevSumLogo">
                        <img src={elevatorImg} alt="Elevator Pitch" className="elProjImg1"/>
                    </div>
                </div>
            </div>
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
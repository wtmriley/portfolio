import React from "react";
import "./projectFour.css";
import { Link } from "react-router-dom";
import gamevid from "../images/p4images/game.mp4"

function ProjectFour() {

    return (
        <div className="all">
            <div className="nav">
                <Link to ="/" className="navspaceText">Home</Link>
            </div>

            <div className="p4title">
                iPhone Game App
            </div>

            <div className="p4sum">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The requirement for this project was to 
                <strong> create a game app for iOS devices. </strong> 
                I used <strong>Swift</strong> and wrote the app using <strong>Xcode</strong>. 
                Users <strong>rotate and tilt their phone to move the blocks</strong> using gravity. 
                The goal is for <strong>all the blocks to become the same color.</strong>
            </div>
            
            <div className="gamegrid">
                <div className="p4vid">
                    <video autoPlay muted loop playsInline className="vide">
                        <source src={gamevid} type="video/mp4"></source>
                    </video>
                </div>
                <div className="bullets">
                    <div className="bultitle">
                        important features
                    </div>
                    <ul>
                        <li className="litem">the blocks start changing color after they are all tapped once by another block </li>
                        <li className="litem">number in the top right counts how many blocks are the same color</li>
                        <li className="litem">button to restart the game when you win</li>
                        <li className="litem">the block's movement is caused by the angle of the phone</li>
                        <li className="litem">when the grey block touches another block, it changes color</li>
                        <li className="litem">the game ends when all the blocks are the same color</li>
                        <li className="litem">the hamburger menu gives you the option to restart the game</li>
                    </ul>
                </div>
            </div>

            <div className="p4link">
                <a href="https://github.com/wtmriley/iPhone-Game-App" target="_blank" className="p4linkText">github link to files</a>
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

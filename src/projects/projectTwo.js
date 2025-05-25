import React from "react";
import { Link } from "react-router-dom";
import "./projectTwo.css";
import vid from "../images/p2images/realflashvid.mp4"


function ProjectTwo() {
    return (
        <div className="all">
            <nav className="nav">
                <Link to ="/" className="navspaceText">Home</Link>
            </nav>

            <div className="title">
                Flash Card Web App
            </div>

            <div className="summary">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The requirement for this project was to create a web app that
                provides a platform for users to create their own study decks and cards, with the ability to
                study the decks and cards as well.
            </div>

            <div className="aall">
                <div className="tools">
                    Tools Used: 
                    <ul className="toolsList">
                        <li> React</li>
                        <li>Javascript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div className="viddemo">
                    <video autoPlay muted loop playsInline className="vid">
                        <source src={vid} type="video/mp4"></source>
                    </video>
                </div>
            </div>

            <div className="githubL">
                <a href="https://github.com/wtmriley/flashcards" target="_blank" className="githubLink">github link to files</a>
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
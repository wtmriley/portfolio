import React from 'react';
import './index.css';
import { Link } from "react-router-dom";

function About() {
    /* put little arrow here for nav */
    return (
        <div className="mainAbout">
            <div className="navbar">
                <div className="navspace">
                <Link 
                to="/"
                className="navspaceText"
                > Home</Link> 
                </div>
            </div>

            <div className="about">
                <h1>About</h1>
                <h2>Denver, Colorado</h2>
                <div className="about-details">  
                <a href="https://github.com/wtmriley" className="aboutLinks" target="_blank">Github</a>
                /
                <a href="www.linkedin.com/in/rileyshinnick" className="aboutLinks" target="_blank">Linkedin</a>
                <h3>wtmriley@gmail.com</h3>
                </div>
                <h2>Storygraph: </h2>
                <h2>Spotify:</h2>
            </div>
        </div>
        

    );
}

export default About;
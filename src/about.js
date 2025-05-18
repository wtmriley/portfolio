import React from 'react';
import './about.css';
import { Link } from "react-router-dom";

function About() {
    /* put little arrow here for nav */
    return (
        <div className="mainAbout">
            <div className="navbar">
                <div className="navspace">
                    <Link to="/" className="navspaceText"> Home </Link> 
                </div>
            </div>

            <div className="about">
                <div className="abouttitle">
                    about me
                </div>

                <div className="email">
                    wtmriley@gmail.com
                </div>

                <div className="aboutlocation">
                    Denver, Colorado
                </div>

                <div className="about-details">  
                    <div className="aboutLinks">
                        <a href="https://github.com/wtmriley" className="github" target="_blank">
                        github
                        </a>
                        
                        <a href="www.linkedin.com/in/rileyshinnick" className="linkedin" target="_blank">
                        linkedin
                        </a>
                        
                        <a href="https://app.thestorygraph.com/profile/wtmriley" className="storygraph" target="_blank" >
                        storygraph
                        </a>
                        
                        <a href="https://open.spotify.com/user/wtmrileyu?si=6868c047755f4f07" className="spotify" target="_blank">
                        spotify
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
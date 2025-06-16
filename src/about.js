import React from 'react';
import './about.css';
import { Link } from "react-router-dom";
import linkedin from "./images/linkedin icon.png";
import github from "./images/github icon.png";

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

                <div className="aboutsummary">
                    <div className="aboutst">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; hi, I'm Riley :) </div>
                    <br /> <br />I’m a designer and developer who values thoughtful design, strong communication, and ease of use.
                    <br /> <br />I come from a background in UX and media design, and I love building things that are clear, useful, and engaging. I especially enjoy working on projects that involve creative freedom and problem solving.
                    <br /> <br />I’m looking for opportunities where I can contribute visually and technically, learn from others, and grow as a developer.
                    <br /> <br />When I’m not coding or designing, I’m probably{" "}
                    <a href="https://open.spotify.com/user/wtmrileyu?si=6868c047755f4f07" className="music" target="_blank" aria-label="Visit my Spotify profile">listening to music,</a>{" "} 
                    <a href="https://app.thestorygraph.com/profile/wtmriley" className="read" target="_blank" aria-label="Visit my Storygraph profile">reading</a>{" "}
                    or playing Stardew Valley. 
                    <br /> <br />
                    <hr className="hr"/>
                </div>

                

                <div className="about-details">  
                    <div className="aboutLinks">
                        <a href="https://github.com/wtmriley" className="github" target="_blank" aria-label="Visit my GitHub profile">
                        <img src = {github} className="githubicon" alt="github icon"></img>
                        check out my projects
                        </a>
                        
                        

                        <a href="https://www.linkedin.com/in/rileyshinnick/" className="linkedin" target="_blank" aria-label="Visit my LinkedIn profile">
                        <img src = {linkedin} className="linkedinicon" alt="linkedin icon"></img>
                        connect with me!
                        </a>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
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

                <div className="aboutsummary">
                    <div className="aboutst">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; hi :) </div>
                    <br /> I'm <strong>Riley Shinnick</strong>, a creative designer and developer based in Denver, Colorado.
                    I've always been drawn to the way design shapes people's experiences. That's what drives my work—creating <strong>intuitive, accessible, and visually engaging solutions</strong> that make <strong>technology feel seamless for everyone. </strong> 
                    I specialize in building responsive, user-centered web apps and have a knack for making them visually appealing. 
                    <br /> <br />When I'm not coding or designing, I'm likely reading, playing Stardew Valley, or doing something outdoors. 
                    <br /> <br />I'm always looking for new projects that challenge me to think differently--whether that's in web development, UX design, or somewhere in that realm.
                    <br /> <br />I'm looking forward to hearing from you!
                </div>

                <div className="about-details">  
                    <div className="aboutLinks">
                        <a href="https://github.com/wtmriley" className="github" target="_blank" aria-label="Visit my GitHub profile">
                        github
                        </a>
                        
                        <a href="www.linkedin.com/in/rileyshinnick" className="linkedin" target="_blank" aria-label="Visit my LinkedIn profile">
                        linkedin
                        </a>
                        
                        <a href="https://app.thestorygraph.com/profile/wtmriley" className="storygraph" target="_blank" aria-label="Visit my Storygraph profile">
                        storygraph
                        </a>
                        
                        <a href="https://open.spotify.com/user/wtmrileyu?si=6868c047755f4f07" className="spotify" target="_blank" aria-label="Visit my Spotify profile">
                        spotify
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
import React from "react";
import "./projectFive.css";
import { Link } from "react-router-dom";
import graphic1 from "../images/p5images/Comp-1_2.gif";
import graphic2 from "../images/p5images/trifold.png";
import graphic3 from "../images/p5images/trifold2.png";
import graphic4 from "../images/p5images/magazine.png"
import graphic5 from "../images/p5images/magazinee2.jpg"
import graphic6 from "../images/p5images/magazinee3.jpg"
import graphic7 from "../images/p5images/magazinee4.jpg"
import graphic8 from "../images/p5images/magazinee5.jpg"
import graphic9 from "../images/p5images/magazinee6.jpg"
import graphic10 from "../images/p5images/fold.png"
import graphic11 from "../images/p5images/myartbaby.gif"
import graphic12 from "../images/p5images/cityy.png"


function ProjectFive() {

    return (
        <div className="all">
            <nav className="nav">
                <Link to ="/" className="navspaceText">Home</Link>
            </nav>
            <div className="p5title">
                Graphic Design
            </div>

            <div className="allWork">
                <div className="amposter">
                    <div className="amposterTitle">
                        Animated Arctic Monkeys Concert Poster
                        </div>
                    <img src={graphic1} alt="Graphic Design Poster" className="p5img"></img>
                </div>

                <div className="menu">
                    <div className="menuTitle">
                        Trifold Menu
                    </div>
                    <img src={graphic2} alt="Trifold Menu" className="p5img"></img>
                    <img src={graphic3} alt="Trifold Menu" className="p5img"></img>
                </div>

                <div className="magazine">
                    <div className="magazineTitle">
                        Rolling Stone Magazine Recreation
                    </div>
                    <div className="magazineall">
                        <img src={graphic4} alt="Rolling Stone Magazine Cover" className="p5img1"></img>
                        <img src={graphic5} alt="Rolling Stone Magazine Page" className="p5img2"></img>
                        <img src={graphic6} alt="Rolling Stone Magazine Page" className="p5img3"></img>
                        <img src={graphic7} alt="Rolling Stone Magazine Page" className="p5img4"></img>
                        <img src={graphic8} alt="Rolling Stone Magazine Page" className="p5img5"></img>
                        <img src={graphic9} alt="Rolling Stone Magazine Back Cover" className="p5img6"></img>
                    </div>
                </div>

                <div className="fold">
                    <div className="foldTitle">
                        Photoshop Art
                    </div>
                    <div className="graphicall">
                        <img src={graphic10} alt="Photoshop Art" className="p5img7"></img>
                        <img src={graphic12} alt="Photoshop Art" className="p5img9"></img>
                    </div>
                    <img src={graphic11} alt="Photoshop Art" className="p5img8"></img>
                </div>

            </div>


            <div className="footer">
                <div className="footergroup">
                <Link to="/project/2" className="footerText">Project One</Link>
                <Link to="/project/3" className="footerText">Project Two</Link>
                <Link to="/project/4" className="footerText">Project Three</Link>
                <Link to="/project/5" className="footerText">Project Four</Link>
                </div>
            </div>
        </div>
    );  
}

export default ProjectFive

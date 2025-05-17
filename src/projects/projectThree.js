import React from "react";
import { Link } from "react-router-dom";
import "./projectThree.css";
import JoahImg from "../images/p3images/customerpersonareal2.png";
import JoahImg2 from "../images/p3images/customerjourneyupdatedREAL.png";
import JoahImg3 from "../images/p3images/empathymapreal.png";
import JoahImg4 from "../images/p3images/joahhead.png";
import JoahImg5 from "../images/p3images/wirecart.png";
import JoahImg6 from "../images/p3images/wirecheckout.png";
import JoahImg7 from "../images/p3images/wiresignup.png";

function ProjectOne() {
    return (
        <div className="all">

            <div className="nav">
                <Link to="/">Home</Link>
            </div>
            
            <div className="titlej">
                Joah Brown E-Commerce Redesign
            </div>

            <div className="summaryj">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I completed a project where I redesigned key aspects of the Joah Brown website based on
                a hypothetical scenario aimed at improving the user experience. The redesign focused on improving the customer journey, 
                streamlining the checkout process, and enhancing the user interface for a more enjoyable shopping experience.
            </div>

            <div className="personastuff">
                
                <div className="saysdoesetc">
                    <div className="saysdoesetctitle">
                        Empathy Map
                    </div>
                    <img src={JoahImg3} alt="Joah Brown Says Feels Thinks Does" className="saysdoesetcimg"></img>
                </div>
                <div className="personae">
                    <div className="personaeTitle">
                        Customer Persona
                    </div>
                    <img src={JoahImg} alt="Joah Brown Persona" className="personaimg"></img>
                </div>
                <div className="customerjourney">
                    <img src={JoahImg2} alt="Joah Brown Customer Journey" className="customerjourneyimg"></img>
                </div>
            </div>
            
            <div className="wireframess">
                <div className="wiretitle">
                    Wireframes
                </div>
                <div className="checkout">
                    <div className="wirecart">
                        <img src={JoahImg5} alt="Joah Brown Wireframes" className="wirecartimg"></img>
                    </div>
                    <div className="wirecheckout">
                        <img src={JoahImg6} alt="Joah Brown Wireframes" className="wirecheckoutimg"></img>
                    </div>
                </div>
                
                <div className="signuporderconfirm">
                    <img src={JoahImg4} alt="Joah Brown Wireframes" className="wiresignup"></img>
                </div>
            </div>

            <div className="footer">
                <div className="footergroup">
                <Link to="/project/1" className="footerText">Project One</Link>
                <Link to="/project/2" className="footerText">Project Two</Link>
                <Link to="/project/4" className="footerText">Project Four</Link>
                <Link to="/project/5" className="footerText">Project Five</Link>
                </div>
            </div>
        </div>
    );
}

export default ProjectOne
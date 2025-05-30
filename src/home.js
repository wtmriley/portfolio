import { Link, useLocation } from "react-router-dom";
import './main.css';
import { useEffect, useState } from "react";


function Home() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(localStorage.getItem('activeLink') || '/'); 

    useEffect(() => {
        localStorage.setItem('activeLink', activeLink);
    }, [activeLink]);

    return (
    <div className="haveTo">
        <div className="left">
        
        </div>

        <div className="middle">
            <div className="titleo">
                Riley Shinnick
            </div>
            <div className="subtitle">
                Designer <br /> + <br /> Developer
            </div>
            <div className="nav">
                <div className="navspace">
                    <Link 
                    to="/about" 
                    className={`navspaceText ${activeLink === "/about" ? "active" : ""}`}
                    onClick={() => setActiveLink("/about")}
                    >+ more about me</Link>                       
                </div>
            </div>
        </div>

        <div className="right">
            <div className="scrolling-wrapper">


                    <Link to="/project/1" className="card">
                        <h2>recruitment iPhone app</h2>
                    </Link>

                    <Link to="/project/2" className="card">
                        <h2>flash card web app</h2>
                    </Link>

                    <Link to="/project/3" className="card">
                        <h2>e-commerce website redesign</h2>
                    </Link>

                    <Link to="/project/4" className="card">
                        <h2>iPhone game app</h2>
                    </Link>

                    <Link to="/project/5" className="card">
                        <h2>graphic design</h2>
                    </Link>

                </div>

            </div>
        </div>

    );
}

export default Home;

import { Link, useLocation } from "react-router-dom";
import './index.css';
import { useEffect, useState } from "react";


function Home() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(localStorage.getItem('activeLink') || '/'); 

    useEffect(() => {
        localStorage.setItem('activeLink', activeLink);
    }, [activeLink]);

    return (
    <div class="haveTo">
        <div className="all">
            <div className="left">
        <header className="title">
            <h1> Riley Shinnick</h1>
        </header>
        <div className="nav">
            <div className="navspace">
                <Link 
                to="/about" 
                className={`navspaceText ${activeLink === "/about" ? "active" : ""}`}
                onClick={() => setActiveLink("/about")}
                >About</Link>
                
                <Link 
                to="/contact" 
                className={`${activeLink === "/contact" ? "active" : ""}`}
                onClick={() => setActiveLink("/contact")}
                >Contact</Link>
            </div>
        </div>
        </div>
            
        <div className="right">
            <div className="scrolling-wrapper">
                <Link to="/project/1" className="card"><h2>Flash Card Web App</h2>
            </Link>
            <Link to="/project/2" className="card">
                <h2></h2>
            </Link>
            <Link to="/project/3" className="card">
                <h2></h2>
            </Link>
            <Link to="/project/4" className="card">
                <h2></h2>
            </Link>
            <Link to="/project/5" className="card">
                <h2></h2>
            </Link>
        </div>    
        </div>
        </div>
    </div>
    );
}

export default Home;
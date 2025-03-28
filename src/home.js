import { Link } from "react-router-dom";
import './index.css';


function Home() {
    return (
    <div>
        <div className="nav">
            <div className="navspace">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            </div>
        </div>
        <header className="title">
            <h1> Riley Shinnick</h1>
        </header>
        <div className="scrolling-wrapper">
            <Link to="/project/1" className="card">
                <h2>Flashcard Web App</h2>
            </Link>
            <Link to="/project/2" className="card">
                <h2>Elevator Pitch</h2>
            </Link>
            <Link to="/project/3" className="card">
                <h2>Game Web App</h2>
            </Link>
            <Link to="/project/4" className="card">
                <h2>Joah Brown</h2>
            </Link>
            <Link to="/project/5" className="card">
                <h2>Graphic Design</h2>
            </Link>
        </div>    
    </div>
    );
}

export default Home;
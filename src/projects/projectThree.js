import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function ProjectOne() {
    return (
        <div className="project-one">
            <Link to="/">Home</Link>
            <h1>Project Three</h1>
        </div>
    );
}

export default ProjectOne
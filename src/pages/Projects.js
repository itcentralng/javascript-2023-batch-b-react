import React from "react";
import { Link } from "react-router-dom";

const Projects = ()=>{
    return (
        <div>
            Welcome to my Projects page
            Click here to see my <Link to={"/projects/calculator"}>calculator</Link>
            </div>
    )
}

export default Projects;
import React from "react";
import { Link } from "react-router-dom";

const Home = ()=>{
    return (
        <div>
            This is home page
            Click here to see my <Link to={"/projects"}>projects</Link>
        </div>
        
    )
}

export default Home;
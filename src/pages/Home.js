import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = ()=>{

    const [users, setUsers] = useState([
        {id: 1, name:"Abdulrahman", age:20},
        {id: 2, name:"Jamil", age:15},
        {id: 3, name:"Amrah", age:10},
    ])
    const [currentUser, setCurrentUser] = useState({})
    const [id, setId] = useState(1)

    useEffect(
        ()=>{
            setCurrentUser(users?.find(user=>user.id===id))
        }, [id]
    )

    return (
        <div>
            Welcome {currentUser?.name}

            <button style={{color:'red'}} onClick={()=>{setId(id+1)}}>+</button>
            <button style={{color:'red'}} onClick={()=>{setId(id-1)}}>-</button>

            Click here to see my <Link to={"/projects"}>projects</Link>
        </div>
        
    )
}

export default Home;
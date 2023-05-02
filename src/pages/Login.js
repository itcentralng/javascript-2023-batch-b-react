import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = ()=>{

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const navigate = useNavigate()

    useEffect(()=>{
        if (localStorage.getItem('user')){
            navigate('/')
        }
    })

    const doLogin = ()=>{
        fetch("https://ai.proposal.itcentral.ng/login",
        {
            method: 'POSt',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email, password})
        }
        ).then(async res=>{
            let response = await res.json()
            if (res.ok){
                localStorage.setItem('user', JSON.stringify(response.user))
                navigate('/')
            }else{
                setMessage(response.message)
            }
        }).catch(err=>{
            console.log(err)
            setMessage(err.message)
        })
    }

    return (
        <div style={{fontSize:'18', width:"450px", display:"flex", alignItems:'center', justifyContent:'center', flexDirection:'column', backgroundImage:'linear-gradient(to top right, navy, blue)', padding:'20px', borderRadius:'15px', marginTop:'100px'}} >
            <input onChange={(e)=>{setEmail(e.target.value)}} value={email} style={{marginBottom:'15px', width:'100%', border:'1px solid #ffff', height:'30px', borderRadius:'8px'}} type="email" name="email" placeholder="Please enter your email"></input>
            <input onChange={(e)=>{setPassword(e.target.value)}} value={password} style={{marginBottom:'15px', width:'100%', border:'1px solid #ffff', height:'30px', borderRadius:'8px'}} type="password" name="password" placeholder="Please enter your password"></input>
            <button onClick={doLogin} style={{cursor:'pointer', fontSize:'20px'}}>Sign In</button>
            <p style={{color:'white'}}>{message}</p>
        </div>
    )
}

export default Login;
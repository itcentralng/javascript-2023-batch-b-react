import './App.css';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Calculator from './pages/myprojects/Calculator';
import { useEffect, useState } from 'react';
import Login from './pages/Login';

function App() {

  const [user, setUser] = useState({})
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(
    ()=>{
      if (location.pathname !== '/login' ){
        setUser(JSON.parse(localStorage.getItem('user')))
          if (!user){
            navigate('/login')
          }}
    }
  )

  const doLogout = ()=>{
    localStorage.clear();
    navigate('/login')
  }

  return <div>
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/projects"}>Projects</Link>
      {user && <button onClick={doLogout}>LOGOUT</button>}
    </div>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/calculator" element={<Calculator />} />
      </Routes>
  </div>
}
export default App;

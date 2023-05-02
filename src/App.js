import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Calculator from './pages/myprojects/Calculator';

function App() {
  return <div>
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/projects"}>Projects</Link>
    </div>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/calculator" element={<Calculator />} />
      </Routes>
  </div>
}
export default App;

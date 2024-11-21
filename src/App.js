import Home from "./Pages/Home";
import Members from "./Components/Members";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Login from "./Pages/Login";
import './Styles/App.css';
import {Route, Routes,} from 'react-router-dom';
import MemberDashboard from "./Pages/MemberDashboard";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="projects" element={<Projects/>}/>
          <Route path="members" element={<Members/>}/>
        </Route>
        <Route path="login" element={<Login/>}/>
        <Route path="dashboard" element={<MemberDashboard/>}/>
      </Routes>
      
    </div>
  );
}

export default App;

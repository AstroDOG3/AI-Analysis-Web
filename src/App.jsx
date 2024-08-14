/*React Import*/
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";

/*Pages Import*/
import LandingPage from './pages/landingPage';
import HomePage from './pages/homePage';
import ResearchPage from './pages/research';
import AnalysisPage from './pages/AnalysisPage';
import AboutPage from './pages/AboutPage';

/*CSS Import*/
import './App.css';




function App() {
    return (
        <div>
            <Router>
                <NavBar/>
                <Routes>
                    <Route path= "/" element = {<LandingPage/>}/>
                    <Route path= "/home" element = {<HomePage/>}/>
                    <Route path="/research" element = {<ResearchPage/>}/>
                    <Route path="/analysis" element = {<AnalysisPage/>}/>
                    <Route path= "/about" element = {<AboutPage/>}/>
                </Routes>
            </Router>
        </div>
    )
}

/*Navbar Function*/
function NavBar(){
    return (
        <nav className="navbar flex justify-end space-x-4 border-b-2">
            <Link to = "/home">
                <h1 className = "text-2xl m-2 text-right">Home</h1>
            </Link>
            <Link to = "/analysis">
                <h1 className = "text-2xl m-2 text-right">Analaysis</h1>
            </Link>
            <Link to = "/research">
                <h1 className = "text-2xl m-2 text-right">Research</h1>
            </Link>
            <Link to = "/about">    
                <h1 className = "text-2xl m-2 text-right">About</h1>
            </Link>

        </nav>
    )
}

export default App

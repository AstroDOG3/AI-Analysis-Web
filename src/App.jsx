import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
                <NavBar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/research" element={<ResearchPage />} />
                    <Route path="/analysis" element={<AnalysisPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </Router>
        </div>
    );
}

/* Navbar Function */
function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar border-b-2 p-4">
            <div className="flex justify-between items-center">
                <div className="text-3xl font-bold">AI Analyst</div>
                <div className="md:hidden">
                    <button onClick={toggleDropdown} className="text-xl focus:outline-none">
                        {/* Hamburger Icon */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link to="/home" className="text-xl md:text-2xl">Home</Link>
                    <Link to="/analysis" className="text-xl md:text-2xl">Analysis</Link>
                    <Link to="/research" className="text-xl md:text-2xl">Research</Link>
                    <Link to="/about" className="text-xl md:text-2xl">About</Link>
                </div>
            </div>
            {/* Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden mt-4 space-y-2">
                    <Link to="/home" className="block text-lg">Home</Link>
                    <Link to="/analysis" className="block text-lg">Analysis</Link>
                    <Link to="/research" className="block text-lg">Research</Link>
                    <Link to="/about" className="block text-lg">About</Link>
                </div>
            )}
        </nav>
    );
}

export default App;

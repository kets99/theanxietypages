import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'; // Import Navbar
import Box from './components/Box';
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
import { useRef } from 'react';
import Essay from './components/Essay';
import { essays } from './components/Essays'; // Import essays data
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './components/About'; // Import your about component
import Submit from './components/Submit'; // Import your about component
import Readmore from './components/Readmore'; // Import your about component
import Reading from './components/Reading'; // Import your about component


function App() {
    return (
        <Router> {/* Wrap the entire app with Router */}
            <div className="App">
                <header className="App-header">
                   <h1> the anxiety pages </h1>
				   <h3>an online space to share and <br/> commiserate about our struggles <br/> with anxiety  </h3>
                </header>
                <Navbar />
				<h2> </h2>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
					<Route path="/submission" element={<Submit />} />
					<Route path="/readmore" element={<Readmore />} />
					<Route path="/reading" element={<Reading />} />
					<Route path="/essay/:title" element={ <Reading/> } /> {/* Dynamic route */}

                   
					
                </Routes>
            </div>
        </Router>
    );
}

export default App;

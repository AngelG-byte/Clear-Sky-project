import React from 'react';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Navbar from './components/inc/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
        <Navbar/>
    <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route  path="/contact" element={<Contact/>}></Route>
        <Route  path="/About" element={<About/>}></Route>
    </Routes>
    </Router>
  );
}

export default App;

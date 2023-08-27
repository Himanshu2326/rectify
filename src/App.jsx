
import React from "react";
import {NavLink} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";

const App = () => {
    return (
        <>
        <Navbar/>
            
                <NavLink to="/" Component={Home} />
                <NavLink to="/about" Component={About} />
                <NavLink to="/services" Component={Services} />
                <NavLink to="/contact" Component={Contact} />
    
        </>
    )
}

export default App;
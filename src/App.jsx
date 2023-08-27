
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
            
                <NavLink path="/" Component={Home} />
                <NavLink path="/about" Component={About} />
                <NavLink path="/services" Component={Services} />
                <NavLink path="/contact" Component={Contact} />
    
        </>
    )
}

export default App;
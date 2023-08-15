
import React from "react";
import { Routes, Route ,  } from "react-router-dom";
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
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/about" Component={About} />
                <Route path="/services" Component={Services} />
                <Route path="/contact" Component={Contact} />
            </Routes>
        </>
    )
}

export default App;
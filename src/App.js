import React from "react";

import {About, Footer, Header, Skills, Testimonial, Work, Certifications} from './container'
import { Navbar } from "./components";
import './App.scss'

const App = () => {
    return(
        <div className="app">
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Certifications />
            <Testimonial />
            <Footer />
        </div>
    )
};

export default App;
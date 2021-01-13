import React from "react";
import { Container, Button, Row, Col, Jumbotron } from "react-bootstrap";
import '../styles/Home.css';

// page components 
import About from './About.jsx';
import FAQ from './FAQ.jsx';
import Hotel from './Hotel.jsx';
import Welcome from './Welcome.jsx';
import Contact from './Contact.jsx';

const Home = () => {

    return (
        <>
        <div className="primary-color">
            <Welcome></Welcome>
        </div>
        <div className="secondary-color">
            <About></About>
        </div>
        <div className="primary-color">
            <Hotel></Hotel>
        </div>
        <div className="secondary-color">
            <FAQ></FAQ>
        </div>
        <div className="primary-color">
            <Contact></Contact>
        </div>      
        </>
    )
}

export default Home;
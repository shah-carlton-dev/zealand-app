import React from "react";
import { Container, Button, Row, Col, Jumbotron } from "react-bootstrap";
import '../styles/Home.css';

// page components 
import About from './About.jsx';
import FAQ from './FAQ.jsx';
import Hotel from './Hotel.jsx';
import Welcome from './Welcome.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';

const Home = () => {

    return (
        <>
        <div className="primary-color-bg">
            <Welcome></Welcome>
        </div>
        <div className="secondary-color-bg">
            <About></About>
        </div>
        <div className="primary-color-bg">
            <Hotel></Hotel>
        </div>
        <div className="secondary-color-bg">
            <FAQ></FAQ>
        </div>
        <div className="primary-color-bg">
            <Contact></Contact>
        </div>      
        <div className="">
            <Footer></Footer>
        </div>    
        </>
    )
}

export default Home;
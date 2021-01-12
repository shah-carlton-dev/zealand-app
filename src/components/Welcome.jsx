import React from "react";
import { Container, Button, Row, Col, Jumbotron } from "react-bootstrap";
import '../styles/Welcome.css';
import { Link } from 'react-router-dom';
import { HashLink as HLink } from 'react-router-hash-link';
import logo from '../assets/backdrop-1.gif';
const Welcome = () => {

    return (
        <>
        <Container fluid className="bg-image" id="introsection">
            <Row>
                <Jumbotron className="bg-container intro-jumbotron bg">
                    <Row className="m-0 p-0 jumbotronText center">                     
                        <Col className='m-auto text-center d-none d-lg-block'>
                            <div className="container">
                                <h1 className='enriq jumbo-title p-3 m-auto text-center subtitle-overlay'>Zealand Pinnacle 2021</h1>
                                <h3 className='enriq jumbo-title p-3 m-auto subtitle-overlay muted'>April 28 - May 2, 2021</h3>
                            </div>
                            <br></br>
                            <Button as={HLink} to="resources" variant="light" size="lg" className="intro-button ibarra shadow">Resources</Button>
                            <Button href="https://www.google.com" target="_blank" variant="light" size="lg" className="intro-button ibarra shadow">Register</Button>
                        </Col>
                        <Col className="d-none d-lg-block">
                            {/* <img className="logo-img" src={logo} alt="logo"></img> */}
                        </Col>
                         {/* mobile */}
                         <Col className="d-lg-none">
                            {/* <img className="logo-img center" src={logo} alt="logo"></img> */}
                        </Col>
                         <Col className='m-auto text-center intro-container d-lg-none'>
                             <div className="container">
                            <h1 className='ibarra jumbo-title p-3 m-auto text-center subtitle-overlay'>Zealand Pinnacle 2021</h1>
                            </div>
                            <br></br>
                            <Button as={HLink} to="resources" variant="light" className="intro-button ibarra-small shadow">Agenda</Button>
                            <Button as={HLink} to="registration" variant="light" className="intro-button ibarra-small shadow">Schedule</Button>
                        </Col>
                        
                    </Row>
                </Jumbotron>
            </Row>
        </Container>
        </>
    )
}

export default Welcome;
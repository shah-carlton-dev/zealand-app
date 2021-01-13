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
                        <div className='m-auto text-center d-none d-lg-block welcomeslab-info'>
                                <h1 className='nun jumbo-title p-3 m-auto text-center'>Zealand Pinnacle 2021</h1>
                                <h3 className='nun jumbo-title p-3 m-auto'>April 28 - May 2, 2021</h3>
                            <br/>
                            <Button as={HLink} to="schedule" variant="outline-light" size="lg" className="intro-button nun">Agenda</Button>
                            <Button href="https://www.google.com" target="_blank" variant="outline-light" size="lg" className="intro-button nun ">Register</Button>
                        </div>
                         {/* mobile */}
                         <Col className='m-auto text-center intro-container d-lg-none welcomeslab-info'>
                             <div className="container">
                            <h1 className='ibarra jumbo-title p-3 m-auto text-center subtitle-overlay'>Zealand Pinnacle 2021</h1>
                            </div>
                            <br/>
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
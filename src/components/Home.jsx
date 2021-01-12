import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

import About from './About.jsx';
import FAQ from './FAQ.jsx';
import Hotel from './Hotel.jsx';
import Welcome from './Welcome.jsx';
import Contact from './Contact.jsx';


const Home = () => {

    return (
        <>
            <Container>
                <Row>
                    <h2>
                        Home Section
                    </h2>
                </Row>
            </Container>

            <Welcome></Welcome>
            <About></About>
            <Hotel></Hotel>
            <FAQ></FAQ>
            <Contact></Contact>
        </>
    )
}

export default Home;
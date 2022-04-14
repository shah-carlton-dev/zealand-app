import React from "react";
import { Container, Button, Row, Col, Accordion, Card } from "react-bootstrap";
import "../styles/FAQ.css"

const FAQ = () => {
    return (
        <Container fluid="md" id="faqsec">
            <Row className="">
                <h2 className="nun mx-auto mainsection"> Frequently Asked Questions </h2>
            </Row>
            <Row>
                <Accordion className="accordion-color">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="" eventKey="0">
                                <h5><span className="faq-q">Q.</span> Where should I check in?</h5>
                                </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <p><span className="faq-a">A.</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in ex libero.
                                    Quisque ornare quam non leo cursus, a molestie sem sollicitudin. Nam ullamcorper
                                    accumsan nibh non eleifend. Maecenas ut felis a ligula malesuada consectetur.
                                    Phasellus vitae odio eu lectus lobortis consequat consectetur ac erat.</p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="" eventKey="1">
                                <h5><span className="faq-q">Q.</span> two about this trip?</h5>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <p><span className="faq-a">A.</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in ex libero.
                                    Quisque ornare quam non leo cursus, a molestie sem sollicitudin. Nam ullamcorper
                                    accumsan nibh non eleifend. Maecenas ut felis a ligula malesuada consectetur.
                                    Phasellus vitae odio eu lectus lobortis consequat consectetur ac erat.</p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="" eventKey="2">
                                <h5><span className="faq-q">Q.</span> three about this trip?</h5>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <p><span className="faq-a">A.</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in ex libero.
                                    Quisque ornare quam non leo cursus, a molestie sem sollicitudin. Nam ullamcorper
                                    accumsan nibh non eleifend. Maecenas ut felis a ligula malesuada consectetur.
                                    Phasellus vitae odio eu lectus lobortis consequat consectetur ac erat.</p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="" eventKey="3">
                                <h5><span className="faq-q">Q.</span> four about this trip?</h5>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>
                                <p><span className="faq-a">A.</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in ex libero.
                                    Quisque ornare quam non leo cursus, a molestie sem sollicitudin. Nam ullamcorper
                                    accumsan nibh non eleifend. Maecenas ut felis a ligula malesuada consectetur.
                                    Phasellus vitae odio eu lectus lobortis consequat consectetur ac erat.</p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Row>
        </Container>
    )
}

export default FAQ;
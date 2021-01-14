import React from "react";
import { Container, Button, Row, Col, Accordion, Card } from "react-bootstrap";
import "../styles/FAQ.css"
const FAQ = () => {

    return (
        <>
            <Container id="faqsec">
                <Row className="">
                    <h2 className="nun mx-auto mainsection"> Frequently Asked Questions </h2>
                </Row>
                <Row>
                    <Accordion className="accordion-color">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="" eventKey="0">
                                    <span className="faq-q">Q. &nbsp;</span>one about this trip?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <span className="faq-a"> A. &nbsp;&nbsp;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in ex libero.
                                    Quisque ornare quam non leo cursus, a molestie sem sollicitudin. Nam ullamcorper
                                    accumsan nibh non eleifend. Maecenas ut felis a ligula malesuada consectetur.
                                    Phasellus vitae odio eu lectus lobortis consequat consectetur ac erat.
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="" eventKey="1">
                                    <span className="faq-q">Q. &nbsp;</span> two about this trip?
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <span className="faq-a"> A. &nbsp;&nbsp;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in ex libero.
                                    Quisque ornare quam non leo cursus, a molestie sem sollicitudin. Nam ullamcorper
                                    accumsan nibh non eleifend. Maecenas ut felis a ligula malesuada consectetur.
                                    Phasellus vitae odio eu lectus lobortis consequat consectetur ac erat.
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="" eventKey="2">
                                    <span className="faq-q">Q. &nbsp;</span> three about this trip?
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <span className="faq-a"> A. &nbsp;&nbsp;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in ex libero.
                                    Quisque ornare quam non leo cursus, a molestie sem sollicitudin. Nam ullamcorper
                                    accumsan nibh non eleifend. Maecenas ut felis a ligula malesuada consectetur.
                                    Phasellus vitae odio eu lectus lobortis consequat consectetur ac erat.
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="" eventKey="3">
                                    <span className="faq-q">Q. &nbsp;</span> four about this trip?
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                    <span className="faq-a"> A. &nbsp;&nbsp;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in ex libero.
                                    Quisque ornare quam non leo cursus, a molestie sem sollicitudin. Nam ullamcorper
                                    accumsan nibh non eleifend. Maecenas ut felis a ligula malesuada consectetur.
                                    Phasellus vitae odio eu lectus lobortis consequat consectetur ac erat.
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Row>
            </Container>
        </>
    )
}

export default FAQ;
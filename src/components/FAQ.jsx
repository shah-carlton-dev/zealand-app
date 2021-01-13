import React from "react";
import { Container, Button, Row, Col, Accordion, Card } from "react-bootstrap";
import "../styles/FAQ.css"
const FAQ = () => {

    return (
        <>
            <Container id="faqsec">
                <Row>
                    <h2> Frequently Asked Questions </h2>
                </Row>
                <Row>
                    <Accordion className="accordian-color">
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="" eventKey="0">
                                Question one about this trip?
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in ex libero. 
                            Quisque ornare quam non leo cursus, a molestie sem sollicitudin. Nam ullamcorper 
                            accumsan nibh non eleifend. Maecenas ut felis a ligula malesuada consectetur. 
                            Phasellus vitae odio eu lectus lobortis consequat consectetur ac erat. 
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="" eventKey="1">
                                Question two about this trip?
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in ex libero. 
                                Quisque ornare quam non leo cursus, a molestie sem sollicitudin. Nam ullamcorper 
                                accumsan nibh non eleifend. Maecenas ut felis a ligula malesuada consectetur. 
                                Phasellus vitae odio eu lectus lobortis consequat consectetur ac erat. 
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="" eventKey="2">
                                Question three about this trip?
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in ex libero. 
                                Quisque ornare quam non leo cursus, a molestie sem sollicitudin. Nam ullamcorper 
                                accumsan nibh non eleifend. Maecenas ut felis a ligula malesuada consectetur. 
                                Phasellus vitae odio eu lectus lobortis consequat consectetur ac erat. 
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="" eventKey="3">
                                Question four about this trip?
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                            <Card.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in ex libero. 
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
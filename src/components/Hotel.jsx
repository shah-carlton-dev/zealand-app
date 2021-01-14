import React from "react";
import { Container, Button, Row, Col, Image, Carousel } from "react-bootstrap";
import "../styles/Hotel.css";

const Hotel = () => {

    return (
        <>
            <Container fluid id="hotelsec">
                <Row>
                    <Col>
                        <div className="text-center nun">
                            <h2 className="mainsection"> The Venue: Virgin Gorda Resort </h2>
                        </div>
                    </Col>
                </Row>
                <Row id="hoteloption1">
                    <Carousel fluid>
                        <Carousel.Item>
                            <img fluid
                                className="d-block w-100"
                                src="https://images.rosewoodhotels.com/is/image/rwhg/rosewoodlittledixbay-aerialview:WIDE-LARGE-16-9"
                                alt="First slide"
                            />
                            <Carousel.Caption className="ccaption">
                                <h3 className="nun">ROSEWOOD LITTLE DIX BAY </h3>
                                <p>Long regarded as one of the world’s greatest getaways, Rosewood Little Dix Bay offers a level of refinement, seclusion, and untamed beauty unrivaled in the Caribbean.</p>
                                <Button variant="outline-light" href="https://www.rosewoodhotels.com/en/little-dix-bay-virgin-gorda" target="_blank">Visit the hotel site</Button>{' '}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.rosewoodhotels.com/is/image/rwhg/rosewoodlittledixbay-pool:WIDE-LARGE-16-9"
                                alt="First slide"
                            />
                            <Carousel.Caption className="ccaption">
                                <h3 className="nun">ROSEWOOD LITTLE DIX BAY GALLERY </h3>
                                <p>Browse stunning aerial shots of the resort along with guestrooms, dining areas, and other venues.</p>
                                <Button variant="outline-light" href="https://www.rosewoodhotels.com/en/little-dix-bay-virgin-gorda/gallery" target="_blank">Visit the hotel gallery</Button>{' '}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.rosewoodhotels.com/is/image/rwhg/rosewoodlittledixbay-pavilionexterior-1-1:WIDE-LARGE-16-9"
                                alt="First slide"
                            />
                            <Carousel.Caption className="ccaption">
                                <h3 className="nun">DINING AT ROSEWOOD LITTLE DIX BAY </h3>
                                <p>From Caribbean fine dining to beachside farm-to-table cuisine, Rosewood Little Dix Bay is home to an eclectic and inspired mix of Virgin Gorda restaurants.</p>
                                <Button variant="outline-light" href="https://www.rosewoodhotels.com/en/little-dix-bay-virgin-gorda/dining" target="_blank">Browse dining options</Button>{' '}
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Row>
                
            </Container>
        </>
    )
}

export default Hotel;
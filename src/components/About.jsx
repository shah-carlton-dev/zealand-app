import React from "react";
import { Container, Button, Row, Col, Image } from "react-bootstrap";
import "../styles/Hotel.css";
const About = () => {

    return (
        <>
            <Container fluid id="aboutsec">
                <Row>
                <h2 className="mainsection nun mx-auto"> About Section </h2>
                </Row>
                <Row>
                    <Col md={6}>
                        <Image src="https://images.rosewoodhotels.com/is/image/rwhg/rosewoodlittledixbay-aerialview:WIDE-LARGE-16-9" fluid />
                    </Col>
                    <Col md={6} className="px-5 align-items-center hotel-text">
                        <div>
                            <h3 className="align-items-center nun">ROSEWOOD LITTLE DIX BAY </h3>
                            <p className="text-center"> Long regarded as one of the world’s greatest getaways, Rosewood Little Dix Bay offers a level of refinement, seclusion, and untamed beauty unrivaled in the Caribbean.</p>
                            <div className="text-center">
                                <Button variant="secondary" href="https://www.rosewoodhotels.com/en/little-dix-bay-virgin-gorda" target="_blank">View More</Button>{' '}
                            </div>
                        </div>
                    </Col>
                    <Col md={6} xs={{span: 12, order: 3}}className="hotel-text align-items-center px-5">
                        <div class=" ">
                            <h3 className="align-items-center nun">ABOUT POINT 2</h3>
                            <p className="text-center"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in ex libero. Quisque ornare quam non leo cursus, a molestie sem sollicitudin. Nam ullamcorper accumsan nibh non eleifend</p>
                            <div className="text-center">
                                <Button variant="secondary" href="https://www.rosewoodhotels.com/en/little-dix-bay-virgin-gorda/gallery" target="_blank">View More</Button>{' '}
                            </div>
                        </div>
                    </Col>
                    <Col md={6} xs={{span: 12, order: 2}}>
                        <Image src="https://images.rosewoodhotels.com/is/image/rwhg/rosewoodlittledixbay-pool:WIDE-LARGE-16-9" fluid />
                    </Col>
                    <Col md={6} xs={{span: 12, order: 4}}>
                        <Image src="https://images.rosewoodhotels.com/is/image/rwhg/rosewoodlittledixbay-pavilionexterior-1-1:WIDE-LARGE-16-9" fluid />
                    </Col>
                    <Col md={6} xs={{span: 12, order: 5}}className="px-5 align-items-center hotel-text">
                        <div>
                            <h3 className="align-items-center nun">ABOUT POINT 3 </h3>
                            <p className="text-center"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in ex libero. Quisque ornare quam non leo cursus, a molestie sem sollicitudin. Nam ullamcorper accumsan nibh non eleifend </p>
                            <div className="text-center">
                                <Button variant="secondary" href="https://www.rosewoodhotels.com/en/little-dix-bay-virgin-gorda/dining" target="_blank">View More</Button>{' '}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About;
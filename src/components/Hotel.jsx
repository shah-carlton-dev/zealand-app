import React from "react";
import { Container, Button, Row, Col, Image } from "react-bootstrap";
import hotel from "../assets/hotel.webp";
const Hotel = () => {

    return (
        <>
            <Container id="hotelsec">
                <Row>
                    <h2> Hotel Section </h2>
                </Row>
                <Row>
                    <div className="col-md-6">
                        <Image rounded src="https://images.rosewoodhotels.com/is/image/rwhg/rosewoodlittledixbay-aerialview:WIDE-LARGE-16-9" fluid></Image>
                    </div>
                    <div className="col-md-6">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in ex libero. 
                            Quisque ornare quam non leo cursus, a molestie sem sollicitudin. Nam ullamcorper 
                            accumsan nibh non eleifend. Maecenas ut felis a ligula malesuada consectetur. 
                            Phasellus vitae odio eu lectus lobortis consequat consectetur ac erat. 
                        </p>
                        <div className="text-center">
                            <Button variant="outline-secondary" href="https://www.rosewoodhotels.com/en/little-dix-bay-virgin-gorda" target="_blank">Visit the hotel site</Button>{' '}
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default Hotel;
import React from "react";
import { Container, Table, Row, Col } from "react-bootstrap";

const Contact = () => {

    return (
        <>
            <Container id="contactsec" className="pb-3">
                <Row>
                    <h2 className="mainsection mx-auto nun pb-2"> Contact </h2>
                </Row>
                <Row className="">
                    <Col md={2} xs={0}></Col>
                    <Col md={4} xs={12}>
                        <Table borderless>
                            <tbody>
                                <tr>
                                    <td>
                                        <i class="fas fa-phone fa-2x"></i>
                                    </td>
                                    <td>
                                        <h5>925.963.2774</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <i class="fas fa-envelope fa-2x"></i>
                                    </td>
                                    <td>
                                        <h5>lburnett@options-cm.com</h5>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col>
                    <h5>
                        <br></br>
                        Feel free to reach out with any questions or concerns!
                    </h5>
                    </Col>

                    {/* <Col md={2} xs={0}></Col>
                    <Col md={2} xs={4} className="align-items-center">
                        <i class="fas fa-phone fa-2x"></i>
                    </Col>
                    <Col md={2} xs={8}> 
                        <h5>925.963.2774</h5>
                    </Col>
                    <Col md={2} xs={4}className="align-items-center">
                    </Col>
                    <Col md={4} xs={8}> 
                    </Col> */}
                </Row>
            </Container>
        </>
    )
}

export default Contact;
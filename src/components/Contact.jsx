import React from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import '../styles/Contact.css'

const Contact = () => {

    return (
        <>
            <Container id="contactsec" className="pb-3">
                <Row>
                    <h2 className="mainsection mx-auto nun pb-2"> Get in Touch </h2>
                </Row>
                <Row className="">
                    <Col md={1} xs={0}></Col>
                    <Col md={{span: 5, order: 0}} xs={{span: 12, order: 1}}>
                        <Table borderless>
                            <tbody>
                                <tr>
                                    <td>
                                        <i className="fas fa-phone fa-2x"></i>
                                    </td>
                                    <td>
                                        <h5>925.963.2774</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <i className="fas fa-envelope fa-2x"></i>
                                    </td>
                                    <td>
                                        <h5>lburnett@options-cm.com</h5>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col>
                    <h5 className="reachout">
                        Feel free to reach out with any questions or concerns!
                    </h5>
                    </Col>

                    {/* <Col md={2} xs={0}></Col>
                    <Col md={2} xs={4} className="align-items-center">
                        <i className="fas fa-phone fa-2x"></i>
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
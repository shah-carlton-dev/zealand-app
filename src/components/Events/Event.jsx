import React, { useState } from 'react';
import { Row, Col, Collapse, Button } from "react-bootstrap";

const Event = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Row>
                <Col md={4}>
                    <Button
                        size="lg"
                        variant="link"
                        className="eventexpandbtn pl-0"
                        onClick={() => setOpen(!open)}
                        aria-expanded={open}
                    >
                        {props.event.title} &ensp;
                        {props.event.description ? <i className="fas fa-angle-down"></i> : <></>}

                    </Button>
                </Col>
                <Col></Col>
                <Col md={3} className="my-auto">
                    <h5> {props.event.time} </h5>
                </Col>
            </Row>
            <Row>
                <Collapse in={open}>
                    <div className="eventdescription px-3">
                        {props.event.description}
                    </div>
                </Collapse>
            </Row>
            <hr />
        </>
    )
}

export default Event;
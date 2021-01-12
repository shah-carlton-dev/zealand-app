import React, { useState } from "react";
import { Container, Button, Row, Collapse, Col, Tabs, Tab } from "react-bootstrap";
import '../styles/Schedule.css';
import Day1Events from "./Events/Day1Events.jsx";
import Day2Events from "./Events/Day2Events.jsx";
import Day3Events from "./Events/Day3Events.jsx";
import Day4Events from "./Events/Day4Events.jsx";
import Day5Events from "./Events/Day5Events.jsx";


const Schedule = () => {
    
    const [open5, setOpen5] = useState(false);


    return (
        <>
            <Container id="schedsec">
                <Row>
                    <h2 className="mx-auto"> 2021 Events Schedule </h2>
                </Row>
                <Tabs defaultActiveKey="day1" id="scheduletabs">
                    <Tab eventKey="day1" title="April 28" className="scheduletab"> <Day1Events/> </Tab>
                    <Tab eventKey="day2" title="April 29" className="scheduletab"> <Day2Events/> </Tab>
                    <Tab eventKey="day3" title="April 30" className="scheduletab"> <Day3Events/> </Tab>
                    <Tab eventKey="day4" title="May 1" className="scheduletab"> <Day4Events/> </Tab>
                    <Tab eventKey="day5" title="May 2" className="scheduletab"> <Day5Events/> </Tab>
                </Tabs>
            </Container>

        </>
    )
}

export default Schedule;
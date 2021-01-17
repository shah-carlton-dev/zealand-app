import React, { useState } from 'react';
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink as HLink } from 'react-router-hash-link';
import { Route, Switch } from 'react-router-dom';
import "../styles/NavbarContainer.css";
import Logistics from './Logistics.jsx';
import Schedule from './Schedule.jsx';
import Home from './Home.jsx';
import logo from "../assets/zp_logo.png";
import * as $ from 'jquery';
import Footer from "./Footer.jsx";
const NavbarContainer = () => {
    const [toggled, setToggled] = useState(false);

    const handleTogglePress = (e) => {
        setToggled(!toggled);
        toggled ? $('#registerbtn').css("display", "inline-block") : $('#registerbtn').css("display", "none");
    }

    return (
        <>
            <Navbar sticky="top" bg="light" variant="light" className="navbar" expand="md" collapseOnSelect={true}>
                <Navbar.Brand className="mr-auto logo-nav">
                    <img
                        alt=""
                        src={logo}
                        width="118"
                        height="42"
                        className="d-inline-block align-top"
                    />{' '}

                </Navbar.Brand>
                <Navbar.Toggle className="ml-auto mr-0" onClick={e => handleTogglePress(e)} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link eventKey={1} as={Link} to="/">Welcome</Nav.Link>
                        <Nav.Link eventKey={2} as={HLink} to="/#aboutsec">About</Nav.Link>
                        <Nav.Link eventKey={3} as={HLink} to="/#hotelsec">Hotel</Nav.Link>
                        <Nav.Link eventKey={4} as={HLink} to="/#faqsec">FAQ</Nav.Link>
                        <Nav.Link eventKey={5} as={HLink} to="/#contactsec">Contact</Nav.Link>
                        <Nav.Link eventKey={6} as={Link} to="/logistics">Logistics</Nav.Link>
                        <Nav.Link eventKey={7} as={Link} to="/schedule">Schedule</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Button href="https://www.google.com" target="_blank" variant="dark" className="ml-3" id="registerbtn">Register</Button>

            </Navbar>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/logistics" component={Logistics} />
                <Route exact path="/schedule" component={Schedule} />
            </Switch>
            
        </>
    )
};

export default NavbarContainer;
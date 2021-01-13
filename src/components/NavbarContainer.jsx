import React from 'react';
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink as HLink } from 'react-router-hash-link';
import { Route, Switch } from 'react-router-dom';
import "../styles/NavbarContainer.css";
import Logistics from './Logistics.jsx';
import Schedule from './Schedule.jsx';
import Home from './Home.jsx';

const NavbarContainer = () => {
    const logo = require('../assets/zp_logo.png');

    return (
        <>
            <Navbar sticky="top" bg="light" variant="light" className="navbar">
                <Navbar.Brand className="mr-auto logo-nav">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Pinnacle 2021
                    </Navbar.Brand>

                <Nav className="mx-auto">
                    <Nav.Link as={Link} to="/">Welcome</Nav.Link>
                    <Nav.Link as={HLink} to="/#aboutsec">About</Nav.Link>
                    <Nav.Link as={HLink} to="/#hotelsec">Hotel</Nav.Link>
                    <Nav.Link as={HLink} to="/#faqsec">FAQ</Nav.Link>
                    <Nav.Link as={HLink} to="/#contactsec">Contact</Nav.Link>
                    <Nav.Link as={Link} to="/logistics">Logistics</Nav.Link>
                    <Nav.Link as={Link} to="/schedule">Schedule</Nav.Link>
                </Nav>
                <Button href="https://www.google.com" target="_blank" variant="dark" className="ml-auto">Register</Button>

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
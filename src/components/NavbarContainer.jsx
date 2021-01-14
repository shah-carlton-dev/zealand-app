import React from 'react';
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink as HLink } from 'react-router-hash-link';
import { Route, Switch } from 'react-router-dom';
import "../styles/NavbarContainer.css";
import Logistics from './Logistics.jsx';
import Schedule from './Schedule.jsx';
import Home from './Home.jsx';
import logo from "../assets/zp_logo.png";

const NavbarContainer = () => {

    return (
        <>
            <Navbar sticky="top" bg="light" variant="light" className="navbar" expand="md">
                <Navbar.Brand className="mr-auto logo-nav">
                    <img
                        alt=""
                        src={logo}
                        width="118"
                        height="42"
                        className="d-inline-block align-top"
                    />{' '}

                </Navbar.Brand>
                <Navbar.Toggle className="ml-auto mr-0" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/">Welcome</Nav.Link>
                        <Nav.Link as={HLink} to="/#aboutsec">About</Nav.Link>
                        <Nav.Link as={HLink} to="/#hotelsec">Hotel</Nav.Link>
                        <Nav.Link as={HLink} to="/#faqsec">FAQ</Nav.Link>
                        <Nav.Link as={HLink} to="/#contactsec">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/logistics">Logistics</Nav.Link>
                        <Nav.Link as={Link} to="/schedule">Schedule</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Button href="https://www.google.com" target="_blank" variant="dark" className="ml-3">Register</Button>

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
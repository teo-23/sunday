import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../Navbar/Navbar.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


export default function Navigation() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Title or logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#login">Login</Nav.Link>
                <Nav.Link href="#signup">Signup</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </> 
    )
}
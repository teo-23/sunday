import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Navigation/Navigation.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


export default function Navigation() {

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    } else {
    document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
    }

    return (
        <>
        <div>
            <Navbar collapseOnSelect expand="lg" id="navbar" className="smart-scroll navbar-expand-lg fixed-top navbar-light bg-white border-0 mb-5">
            <Navbar.Brand id="navbar-title" className="navbar-brand font-weight-bold" href="/">Title or logo <span
                        className="navbar-text font-italic text-left"> a quick word</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />            
            <Navbar.Collapse className="test" id="responsive-navbar-nav">
                <Nav className="ml-auto nav-item">
                <Nav.Link className="nav-link text-info" href="#home">Home</Nav.Link>
                <Nav.Link className="nav-link text-info" href="#login">Login</Nav.Link>
                <Nav.Link className="nav-link text-info" href="#signup">Signup</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
            
        </> 
    )
}
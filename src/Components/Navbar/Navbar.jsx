import React from 'react';
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'


export default function Navbar() {
    $(document).ready(function() {
        let scroll_top = 0;
    
        $('body').css('padding-top', $('.navbar').outerHeight() + 'px')
    
        if ($('.smart-scroll').length > 0) { 
             let last_scroll_top = 0;
            $(window).on('scroll', function() {
                scroll_top = $(this).scrollTop();
                if(scroll_top < last_scroll_top) {
                    $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
                }
                else {
                    $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
                }
                last_scroll_top = scroll_top;
            });
        }	
    })

    return (
        <>
        {/* Lloyd test here below */}
        {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Title or logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#login">Login</Nav.Link>
                <Nav.Link href="#signup">Signup</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar> */}

        {/* First test here below */}
        {/* <div>
            <nav className="navbar smart-scroll navbar-expand-lg navbar-light bg-white">
            <a class="navbar-brand" href="/">title or logo <span
                class="navbar-text text-info font-italic text-left"> a quick word</span></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav container-nav">
                <a class="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="/login">Login</a>
                <a class="nav-item nav-link" href="/signup">Sign up</a>
                </div>
            </div>
            </nav>
        </div> */}

        <div>
            <nav class="navbar smart-scroll navbar-expand-lg fixed-top navbar-light bg-white border-0 mb-5">
                    <a id="navbar-title" class="navbar-brand font-weight-bold" href="/">title or logo <span
                        class="navbar-text font-italic text-left"> a quick word</span></a>
                <button class="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon toggler"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link text-info" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-info" href="/login">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-info" href="/signup">Signup</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

</>

    )
}

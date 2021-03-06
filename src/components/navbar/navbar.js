import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './navbar.styles.css';

const MyNavbar = () => {
  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="md" style={{ backgroundColor: 'black'}} variant="dark" className="nav-theme justify-content-between">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ color: 'red'}}/>
        <Navbar.Collapse id="responsive-navbar-nav" style={{ color: 'red'}}>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MyNavbar
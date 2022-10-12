import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Brand from '../5229589.png'
import '../styles/App.css'


export default function Navbarp() {
    return(
        <>
        <Navbar className="navhead">
        <Container>
          <Navbar.Brand href="#home"><img src={Brand} alt="Brand" id="navbrand"/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className='link'>Home</Nav.Link>
            <Nav.Link href="/create" className='link'>Be A Member</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}


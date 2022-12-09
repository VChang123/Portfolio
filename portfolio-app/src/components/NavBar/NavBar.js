import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css"
// import NavLink from 'react-bootstrap/esm/NavLink';
import { NavLink } from 'react-router-dom';
// import {Link} from 'react-scroll'
import { HashLink as Link } from 'react-router-hash-link';




export default function NavBar() {
  return (
    <div>
        <Navbar variant="light" fixed='top' className='white-nav'>
            <Container>
            <Navbar.Brand to="/"></Navbar.Brand>
            <Nav className="ms-auto">
                
                <Link to="/Portfolio/#about"  style={{fontSize: "1.3rem"}}>
                    About
                </Link>
                <Link to="/Portfolio/#projects" style={{fontSize: "1.3rem", marginLeft:"9%"}}>
                    Projects
                </Link>
                <Link to="/Portfolio/#contact"  style={{fontSize: "1.3rem", marginLeft:"9%", marginRight:"6%"}}>
                    Contact
                </Link>
            </Nav>
            </Container>
        </Navbar>
    </div>
  )
}
 
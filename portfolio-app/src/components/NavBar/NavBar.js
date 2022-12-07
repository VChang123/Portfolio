import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css"




export default function NavBar() {
  return (
    <div>
        <Navbar variant="light" fixed='top' className='white-nav'>
            <Container>
            <Navbar.Brand href="/"></Navbar.Brand>
            <Nav className="ms-auto">
                
                <Nav.Link href="/Portfolio/#about" style={{fontSize: "1.3rem"}}>
                    About
                </Nav.Link>
                <Nav.Link href="/Portfolio/#projects" style={{fontSize: "1.3rem", marginLeft:"9%"}}>
                    Projects
                </Nav.Link>
                <Nav.Link href="/Portfolio/#contact" style={{fontSize: "1.3rem", marginLeft:"9%", marginRight:"6%"}}>
                    Contact
                </Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    </div>
  )
}
 
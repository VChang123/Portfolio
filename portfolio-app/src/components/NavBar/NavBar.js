import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css"
// import NavLink from 'react-bootstrap/esm/NavLink';
import { NavLink } from 'react-router-dom';
// import {Link} from 'react-scroll'
import { HashLink as Link } from 'react-router-hash-link';
import orca from "./orca.png"




export default function NavBar() {
  return (
    <div>
        <Navbar variant="light" fixed='top' className='white-nav'>
            {/* <Container> */}
                <Link to="/Portfolio/#home"   className='navbar-brand'>
                    <img 
                        src={orca} 
                        width="35"
                        height="35"
                        className="d-inline-block align-top"
                        marginLeft="60px"
                        >

                        </img>
                </Link>
                <Nav className="ms-auto1">
                    
                    <Link to="/Portfolio/#about"  
                        style={
                            {
                                fontSize: "1.5rem", 
                                fontFamily:"HomePlanetBB-Regular", 
                                textDecoration:"none", 
                                color:"black"
                                }}>

                        About
                    </Link>
                    <Link to="/Portfolio/#projects" 
                        style={
                            {
                                fontSize: "1.5rem", 
                                marginLeft:"20%", 
                                fontFamily:"HomePlanetBB-Regular", 
                                textDecoration:"none", 
                                color:"black"
                                }}>

                        Projects
                    </Link>
                    <Link to="/Portfolio/#contact"  
                        style={
                            {
                                fontSize: "1.5rem", 
                                marginLeft:"20%", 
                                // marginRight:"100px", 
                                fontFamily:"HomePlanetBB-Regular", 
                                textDecoration:"none", 
                                color:"black"
                                }}>
                        Contact
                    </Link>
                </Nav>
            {/* </Container> */}
        </Navbar>
    </div>
  )
}
 
import React from 'react'
import Card from 'react-bootstrap/Card';
import "./ProjectItem.css"
// import NavLink from 'react-bootstrap/esm/NavLink';
import { NavLink } from 'react-router-dom';

export default function (props) {
  return (
    <div className='projectItem'>
        <Card>
            <Card.Img variant="top" src={props.image} style={{height: "18rem"}}/>
            <Card.Body>
                <Card.Title>
                  <NavLink to={props.link} className="stretched-link">
                    {props.title}
                  </NavLink>
                  </Card.Title>
                <Card.Text>
                    {props.description}   
                    
                </Card.Text>
            </Card.Body>
          </Card>
    </div>
  )
}

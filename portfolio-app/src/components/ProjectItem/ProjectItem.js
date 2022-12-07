import React from 'react'
import Card from 'react-bootstrap/Card';
import "./ProjectItem.css"


export default function (props) {
  return (
    <div className='projectItem'>
        <Card>
            <Card.Img variant="top" src={props.image} style={{height: "18rem"}}/>
            <Card.Body>
                <Card.Title>
                  <a href={props.link} className="stretched-link">
                    {props.title}
                  </a>
                  </Card.Title>
                <Card.Text>
                    {props.description}   
                    
                </Card.Text>
            </Card.Body>
          </Card>
    </div>
  )
}

import React from 'react'
import Card from 'react-bootstrap/Card';
import "./ProjectItem.css"


export default function (props) {
  return (
    <div className='projectItem'>
        <Card>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    <a href={props.link} class="stretched-link">
                        {props.description}
                    </a>
                    
                    
                </Card.Text>
            </Card.Body>
          </Card>
    </div>
  )
}

import React from 'react'
import "./ProjectsPage.css"
import ProjectItem from '../../components/ProjectItem/ProjectItem'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import persona from "./assets/persona.PNG";


export default function ProjectsPage() {

  return (
    <div className='projects'>
        
        <div className='title'>
          <h1> Projects</h1>
        </div>

        <div className='project-grid'>
          <Row xs={1} md={2} className="g-4">
            <Col> 
              <ProjectItem image={persona} link={"www.google.com"}title={"Persona"} description={"A project focused on exploring how people interact with interfaces"}/>
            </Col>
            <Col>
              <ProjectItem image={"./image"} title={"Redesign"} description={"test"}/>
            </Col>
            <Col>
              <ProjectItem image={"./image"} title={"Iterative Design"} description={"test"}/>
            </Col>
            <Col>
              <ProjectItem image={"./image"} title={"Development"} description={"test"}/>
            </Col>
          </Row>
        </div>
    </div>
  )
}

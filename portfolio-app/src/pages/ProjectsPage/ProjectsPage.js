import React from 'react'
import "./ProjectsPage.css"
import ProjectItem from '../../components/ProjectItem/ProjectItem'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import persona from "./assets/persona.PNG";
import redesign from "./assets/redesign.PNG"
import iterative from "./assets/iterative.PNG"
import development from "./assets/development.PNG"


export default function ProjectsPage() {

  return (
    <div className='projects' id='projects'>
        
        <div className='title'>
          <h1> Projects</h1>
        </div>

        <div className='project-grid'>
          <Row xs={1} md={2} className="g-4">
            <Col> 
              <ProjectItem image={persona} link={"/Portfolio/persona"} title={"Persona"} description={"A project focused on exploring how people interact with interfaces and creating personas"}/>
            </Col>
            <Col>
              <ProjectItem image={redesign} link={"/Portfolio/redesign"}title={"Redesign"} description={"Learning the how the design process works and trying to build a responsive website"}/>
            </Col>
            <Col>
              <ProjectItem image={development} link={"/Portfolio/development"} title={"Development"} description={"A project focused on learning React and designing a functional website"}/>            
            </Col>
            <Col>
             
              <ProjectItem image={iterative} link={"/Portfolio/iterative"}title={"Iterative Design"} description={"Designing high quality protoypes involving user testing"}/>

            </Col>
          </Row>
        </div>
    </div>
  )
}

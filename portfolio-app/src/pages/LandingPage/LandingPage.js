import React from 'react'
import "./LandingPage.css"
import succulent from "./Succulent.png"




export default function LandingPage() {
  return (
    <div className='landingPage'>
      <div className='parent'>
        {/* <div className='childleft'> */}
          <img src={succulent} className="image"/>
        {/* </div> */}
        <div className='childright'>
          <div className='text'>
            <h1> Hello I am _____, </h1>
            <br/>
            <br/>
            <br/>
            <br/>
            <p>Software Engineer | Classical <br/> Musician | Student at Brown <br/> University</p>
          </div>
        </div>
      </div> 
    </div>
  )
}

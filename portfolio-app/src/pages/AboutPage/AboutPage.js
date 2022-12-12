import React from 'react';
import "./AboutPage.css"



export default function AboutPage() {
  return (
    <div className='aboutPage' id='about'>
      <div className='parent'>
        <div className='leftchild'>
            <p> 
              {'    '}Hello! I am _____, and I am from ______. I am currently a senior
              at Brown University where I am concentrating in Computer Science
              and Music. I am also currently working as a ________________ for the 
              _______ department.
            </p>

            <p> 
              I have experience working in a variety of coding languages such as Java,
              C, React, Python, HTML/CSS, and many more. I really enjoy working on CS projects
              related to systems and building full-stack applications. 
            </p>
            
            <p> 
              At Brown I am involved with the ____________, ____________, and ____________. In my free 
              time I really enjoy going on long walks to explore. I also like to practice oboe, and love
              classical music. I am an avid stationary collector and like learning about calligraphy as well.
            </p>
        </div>
        <div className='rightchild'>
          <h1> About </h1>
        </div>
      
      </div>
     
        
       
    </div>
  )
}

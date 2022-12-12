import React from 'react'
import "./Development.css"
import { HashLink as Link } from 'react-router-hash-link';
import development from  "./development.PNG";



export default function Development() {

    // Context/Problem - What problem does this solve? Why should we care?
    // Research/Feedback - What precedent work is out there? Who is our audience? What do they want/think? 
    // Design Iterations (with justification) - What are the tradeoffs? Explain your design decisions. 
    // Conclusion - What are your lessons learned, insights, takeaways, etc.? 

  return (
    <div className='development'>
        <div className='big-div'>
            <div className = "flex-child-left">
                <p className = "side-header">  
                    <Link to="#designIterations" >Design</Link>
                </p>
                <p className='side-header'>
                    <Link to="#website">Website</Link>
                </p>
                <p className = "side-header"> 
                    <Link to="#takeaways">Takeaways</Link> 
                    
                </p>
                <p className = "side-header"> 
                    <Link to="#conclusion" >Conclusion</Link>
                
                </p>
            
            </div>

            <div className='flex-child-right'>
                <h1 className = "header" > Development </h1>
                <p className='text'> 
                    React is a very popular and powerful language that can be used to create very versatile
                    websites and mobile applications. The main goal of this project was to get familiar with 
                    the language and the use of state in this application. State is a very powerful concept that can 
                    allow the website to change based on the current state of a component. 
    
                   
                </p>


                <h3 className = "sub-header"> 
                    <p id="designIterations">
                        Design Iterations
                    </p>
                </h3>  

                <div className='box'>
                    <p className='section-header'>
                        VISUAL DESIGN
                    </p>
                    <p className='text'>The visual design of the website is very simple</p>
                    <ul className='list'>
                        <li> Each plant is displayed on a card alongside with its description and price</li>
                        <li> The different filters and sorting options are displayed along the top of the page for easy access</li>
                        <li> The cart is displayed to the right of the plant options in order to have all the necessary components 
                            displayed on the screen. This will ensure that all the necessary things that the 
                            user might look for are on one page.
                        </li>
                        <li>
                            Each item in the cart also has the option to remove or add more of that item.
                        </li>
                    </ul>
                    {/* image of the website here */}
                </div>

                <div className='box'>
                    <p className='section-header'>
                        CODE DESIGN
                    </p>
                    <ul>
                        <li> 
                            Components
                            <ul>
                                <li>
                                    Components that were made were for the filter dropdown and the sort filter. These
                                    components were made because they were similar and could be reused
                                </li>
        
                            </ul>
                        </li>
                        <li> 
                            Pages
                            <ul>
                                <li>
                                    Most of the logic was done in the FilteredList javascript file. This file 
                                    kept the state of the list and the state of the filters based on what 
                                    the user selected and re-rendered the page based on that.
    
                                </li>
                                <li>
                                    The FilteredList file, also kept track of the state of the cart.
                                </li>
                                <li>
                                    The DisplayList file, is the one responsible for rendering the items in 
                                    the cart and changing based the current state of the cart.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                
                <h3 className = "sub-header"> 
                    <p id="website">
                        Website
                    </p>
                </h3> 

                <div className='box'>
                    <img src={development} className="image"/>
                    <p className='text'>
                        Here is a link to the website!
                    </p>
                    <button type="button" className="btn btn-outline-success">
                        <a href='https://sadopossum246.github.io/CS1300Development/' 
                            target="_blank" rel="noopener noreferrer">
                            Visit Plant Shop
                        </a>
                    </button>
                </div>
                    


                <h3 className = "sub-header"> 
                    <p id="takeaways">
                        Takeaways
                    </p>
                </h3> 

                <div className='box'>
                    <ul className='list'>
                        <li> I learned how to use state with React </li>
                        <li> I also learned how to make resusable components</li>
                        <li> Learned how to design a functional website with a purpose</li>
                    </ul>
                </div> 

                <h3 className = "sub-header"> 
                    <p id="conclusion">
                        Conclusion
                    </p>
                </h3> 

                <div className='box'>
                    <p className='text'>
                        By building a simple plant shop website it 
                        allowed me to learn how to use State and learn about React in general.
                        I learned a lot about how to create a functional and reactive website that takes 
                        in user input. It was also really interesting learning how best to design the 
                        layout of the website and think about accessibility and usability. I also
                        was able to learn how to debug javascript better. 
                    </p>

                </div>
            </div>


        </div>
    </div>
  )
}

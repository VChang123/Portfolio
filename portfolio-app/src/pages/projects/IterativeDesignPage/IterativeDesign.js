import React from 'react'
import "./IterativeDesign.css"
import analysis from "./assets/analysis.png"
import changes from "./assets/changes.png"
import hifiv1 from "./assets/highfiv1.png"
import hifiv2 from "./assets/highfiv2.png"
import lowfi from "./assets/lowfi.png"
import sketches from "./assets/sketches.png"
import { HashLink as Link } from 'react-router-hash-link'

export default function IterativeDesign() {
  return (
    <div className='iterative'>
        <div className='big-div'>
            <div className = "flex-child-left">
                <p className = "side-header">  
                    <Link to="#partOne" >Part One</Link>
                </p>
                <p className = "side-header"> 
                    <Link to="#partTwo">Part Two</Link> 
                    
                </p>
                <p className = "side-header"> 
                    <Link to="#partThree" >Part Three</Link>
                
                </p>
            </div>


            <div className='flex-child-right'>
                <h1 className = "header" >Capsule App</h1>

                <p className = "text"> 
                     Your group will go through the full process of mocking up a solution to the startup's concept. 
                    This assignment is split into four parts to exemplify an iterative design process flow: 
                    (1) sketching ideas of the interface, (2) creating an interactive, high-fidelity prototype, 
                    (3) conducting user testing on a final, revised prototype, and (4) contacting the start up.
                </p>

                  
                <h3 className = "sub-header"> 
                    <p id="partOne">
                        Part 1 : Sketching & Wireframing
                    </p>
                </h3>  

                <div className='box'>
                    <p className='section-header'>
                        PRE-DESIGN THINKING
                    </p>
                    <p className='text'>
                        The startup that we chose to design a prototype for is called <u> CAPSULE</u>. 
                        The idea behind this start up is to upload or take a photo of an item to a platform, 
                        then receive links to purchase this item.

                        <br/>
                        <br/>

                        We thought the best interface for this goal would be to design a mobil app because
                        phones normally have cameras which would make it easy to take a photo, and they have photo
                        albums where the users can chose a photo to upload.

                        <br/>
                        <br/>

                        The users that would be impacted by our interface would be the normal everyday consumers
                        because this service is targeted to people who want to buy certain items. Thus,
                        this app would cater to users who want to purchase an item that they have seen before.
                    </p>
                </div> 

                
                <div className='box'>
                    <p className='section-header'>
                        SKETCHING
                    </p>
                    <p className='text'>
                        Our group first individually brainstormed 4 possible designs for our startup's app. We each sketched out the 3
                        main screens--home, find item, and results--on pen and paper.
                    </p>
                      
                    <img src={sketches} className="image"/>
                 
                    
                </div> 

                        
                <div className='box'>
                    <p className='section-header'>
                        COMBINING IDEAS INTO WIREFRAME
                    </p>
                    <p className='text'>
                        After our discussion, we combined the sketches through the following design choices:

                        <ul className='list'>
                            <li>
                                For the home page we decided to make the home screen not a login screen which 
                                a user may encounter when they first get the app. Instead we decided to make the 
                                home page that the user would expect to see if they had used the app before.
                            </li>
                            <li>
                                The designs for the upload screen and the results screen were relatively similar
                                across all the sketches so we refined those sketches to make them more cohesive.
                            </li>
                         </ul>
                    </p>
                    
                    <img src={lowfi} className="image"/>
                    
                   
                </div> 


                <h3 className = "sub-header"> 
                    <p id="partTwo">
                        Part 2: Mockups
                    </p>
                </h3>  

                 
                <div className='box'>
                    <p className='section-header'>
                        INTERACTIVE HIGH FIDELITY MOCKUP V1
                    </p>
                    <p className='text'>
                        This is the first version of our mockup.
                    </p>
                    
                    <img src={hifiv1} className="image"/>
                    
                    <button type="button" className="btn btn-outline-success"> 
                        <a href="https://www.figma.com/proto/ueyfcHzIOqNaDh4eWByOjz/CS1300-Iterative-Assignment?node-id=1%3A23&scaling=scale-down&page-id=2%3A21&starting-point-node-id=1%3A23"
                            target="_blank" rel="noopener noreferrer">
                            
                            VIEW V1 PROTOTYPE
                        
                        </a>
                    </button>
                </div> 


                   
                <div className='box'>
                    <p className='section-header'>
                        MOCKUP CRIT
                    </p>
                    <p className='text'>
                        We received the following feedback from the mockup critique:

                        <ul className='list'>
                            <li>
                            In the home page, the "FIND ITEM" verbiage was not conducive
                            to what the button was trying to do.
                            </li>
                            <li>
                            Allow for accessibility to take/upload a picture no 
                            matter where they are in the app (like TikTok's plus 
                            button at the bottom bar)
                            </li>
                            <li>
                            The icons on the navbar should
                            change color when the user is actively on that page. For example, the home page icon would be a different
                            color when the users are on the home page of the app.
                            </li>
                            <li>
                            The save button is slightly too small to easily press on it in the mobile screen.
                            </li>
                        </ul>
                    </p>   
                </div> 

                <div className='box'>
                    <p className='section-header'>
                        INTERACTIVE HIGH FIDELITY MOCKUP V2
                    </p>
                    <p className='text'>
                        This is the second version of our mockup.
                    </p>
                    
                    <img src={hifiv2} className="image"/>
                    
                    <button type="button" className="btn btn-outline-success"> 
                        <a href="https://www.figma.com/proto/ueyfcHzIOqNaDh4eWByOjz/CS1300-Iterative-Assignment?node-id=123%3A7&scaling=scale-down&page-id=123%3A6&starting-point-node-id=123%3A7"
                        target="_blank" rel="noopener noreferrer">
                            
                                VIEW V2 PROTOTYPE
                            
                        </a>
                    </button>
                </div> 


                <h3 className = "sub-header"> 
                    <p id="partThree">
                        Part 3: User Testing
                    </p>
                </h3> 

                <div className='box'>
                    <p className='section-header'>
                        LINKS TO RECORDINGS
                    </p>
                    <p className='text'>
                        Through usertesting.com, we gathered the insights, confusions, and opinions of 3 random participants. You can view 
                        their audio and video recordings below.
                    </p>
                    <p>
                        <button type="button" className="btn btn-outline-success">
                            <a href="https://app.usertesting.com/v/460696ea-3693-4d9a-aadc-39755a211c7c?encrypted_video_handle=5d727f8d-72eb-4560-8a8b-b45a1e314734#!/answers&shared_via=link"
                            target="_blank" rel="noopener noreferrer">
                                USER 1
                            </a> 
                        </button>
                        <button type="button" className="btn btn-outline-success">
                            <a href="https://app.usertesting.com/v/b91b2371-0013-45a4-be18-3bd8bc5fdf07?back=https%3A%2F%2Fapp.usertesting.com%2Fdashboard#!/answers&shared_via=link" 
                            target="_blank" rel="noopener noreferrer">
                                USER 2
                            </a> 
                        </button>
                        <button type="button" className="btn btn-outline-success">
                            <a href="https://app.usertesting.com/v/c975427a-e25e-462b-afa9-43534c9a008d?encrypted_video_handle=cd68c144-a8c1-485e-ad84-3323903b3a20#!/answers&shared_via=link"
                            target="_blank" rel="noopener noreferrer">
                            USER 3
                            </a>
                        </button>
                    </p>
                </div> 

                <div className='box'>
                    <p className='section-header'>
                        ANALYSIS OF RESULTS
                    </p>
                    <p className='text'>
                        Through usertesting.com, we gathered the insights, confusions, and opinions of 3 random participants. You can view 
                        their audio and video recordings below.
                    </p>
                
                    <img src={analysis} className="image"/>
                
                </div> 


                <div className='box'>
                    <p className='section-header'>
                        CONCLUSION
                    </p>
                    <p className='text'>
                        Based on the task results and the answers from the post-study questions,
                         we brainstormed 4 potential design changes we would make in a future iteration.
                    </p>
        
                    <img src={changes} className="image"/>
                    
                 
                </div> 



            </div>


        </div>

    </div>
  )
}

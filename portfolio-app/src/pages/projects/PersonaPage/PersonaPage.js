import React from 'react'
import "./PersonaPage.css"
import options from "./assets/options.png"
import persona1 from "./assets/Persona1.png"
import persona2 from "./assets/Persona2.png"
import storyboard from "./assets/storyboard.png"
import storyboard1 from "./assets/storyboard1.png"
import storyboard2 from "./assets/storyboard2.png"
import washerOptions from "./assets/washer-options.png"
import washer from "./assets/washer.png"
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'



export default function PersonaPage() {
  return (
    // <BrowserRouter>
        <div className='persona'>
            <div className='big-div'>
                
                <div className = "flex-child-left">
                    <p className = "side-header">  
                        <Link to="#interface-anchor" >Interface</Link>
                    </p>
                    <p className = "side-header"> 
                        <Link to="#user-anchor">Users</Link> 
                       
                    </p>
                    <p className = "side-header"> 
                        <Link to="#observation-anchor" >Observations</Link>
                    
                    </p>
                    <p className = "side-header"> 
                        <Link to="#persona-anchor">Personas</Link>
                 
                    </p>
                    <p classNamess = "side-header"> 
                        <Link to="#storyboard-anchor">Storyboard</Link>
                        
                    </p>
                </div>
                <div className='flex-child-right'>
                    <h1 className = "header" >Personas and Storyboarding</h1>

                    <p className = "text"> 
                        This project involved finding a public interface and seeing how users interact with it. 
                        Then 2 user personas and a storyboard were constructed from those observations. The purpose of
                        this project is to learn about how people interact with users, and based on those observatiosns
                        create some personas to represent users.
                    </p>
                    
                    <h3 className = "sub-header"> 
                        <p id="interface-anchor">
                            INTERFACE
                        </p>
                    </h3>  

                
                    <img src = {washerOptions} alt = "Sketch of a washing machine" className='image'/>
                    
                    
                    <div className = "box">
                        <p className = "text"> 
                        The interface that was chosen for this project was a washing machine which allows users to wash their clothes and select the options
                        they want to use for this particular load of laundry.
                        This washing machine has a standard door which opens into a chamber where clothes can be put into.
                        On the top right hand corner of the machine, there is a drawer to put in detergent and at the top of 
                        the machine there is a panel with different types of wash options for this load of laundry that the user 
                        can choose.
                        </p>
                    </div> 


                    <h3 className = "sub-header"> 
                        <p id="user-anchor">USERS</p>
                
                    </h3>
                    <div className = "box">
                        <h2 className = "section-header"><u>User 1:</u></h2>
                        <p className="text"> 
                            User 1 is a college student that has 
                            never used this particular laundry machine before. 
                            They were motivated to use this laundry machine because it was free. User 1 very easily finds the door
                            to the washing machine and opens it and starts to shove in their laundry. They also easily find the drawer
                            to put the laundry detergent into. However, they seem a bit confused about which container in the drawers 
                            to actually put the laundry detergent. They struggle for a few minutes and eventually find the right container.
                            User 1 then looks at the options the washing machine has and takes a few minutes to pick out the one they want 
                            and press start.
                        </p>
                    </div>

                    <div className = "box">
                        <h2 className = "section-header"><u>User 2:</u></h2>
                        <p className="text"> 
                            User 2 is a college student that has 
                            never used this particular laundry machine before. User 2 
                            quickly opens the washing machine door and throws in their laundry. They then throw a laundry pod into the washing
                            machine chamber. They then select an option from the options panel and press start.
                        </p>
                    </div>
                    <div className = "box">
                        <h2 className = "section-header"><u>User 3:</u></h2>
                        <p className="text"> 
                            User 3 is a college studentthat has 
                            used this particular laundry machine before. User 3 finds a washer with the door already open.
                            They then flip over all their clothes, sorts them, and then puts it into the washer. User 3 finds the detergent drawer easily but seems to be confused
                            where to put the laundry detergent in. In the end, they choose a  container to put their detergent in, 
                            choose their laundry options quickly and press start.
                        </p>
                    </div>

                    <h3 className = "sub-header"> 
                        <p id="observation-anchor">OBSERVATIONS</p>
                    
                    </h3>
                    <div className="box">
                        <h2 className="section-header"><u>Interview Questions</u></h2>
                            <ol type="1" className="list">
                            <li>Have you used this washing machine before?</li>
                            <li>How did the design of this interface impact your use of it?</li>
                            <li>How intuitive was the washing machine?</li>
                            <li>Was there anything confusing/difficult about the washing machine?</li>
                            <li>What do you think about the labels for the options that the washing machine had?</li>
                            <li>Is there anything that would improve your experience?</li>
                            </ol>
                    </div>

                    <div className = "box">
                        <h2 className="section-header"><u>Responses</u></h2>
                        <ul className="list">                
                            <li>
                                The users generally agreed that this washing machine was well designed. For example 
                                the handle for the door allowed the user to know that it could be pulled and that it opened into 
                                chamber where they put the clothes. There are also minimal distractions on the interface which helped in finding
                                the laundry tray which also had a handle, indicating to users that it could be pulled out.
                            </li>
                            <li>
                                The users also noted that the  labels for each of the laundry options on the 
                                laundry panel were very clear. 
                                For example, the temperature
                                settings were conveyed in common terms such as "warm", "hot", or "cold" instead of acutal temperatures like 30 degrees
                                farenheit. The soiled option also provided a picture next to each option so users could figure the appropriate
                                settings based on the state of their clothes.
                            </li>
                            <li>
                                A difficulty observed by both User 1 and User 3 was 
                                where to put the laundry detergent in the detergent
                                drawer. User 3 mentioned that the different containers were all labeled "WASH"
                                which were not very helpful in 
                                finding where to put the detergent. User 1 also mentioned that the text that was labeling the container were in small white raised
                                text, which was the same color as the containers, and made it hard to see.
                            </li>
                            
                        </ul>
                    </div>
                
                    <h3 className = "sub-header"> 
                        <p id="persona-anchor">
                            PERSONAS
                        </p>
                    </h3>

                    <div className="image-persona">
                        <img src={persona1} alt="Image of the empathy map for persona 1" height="500" width="500"/>
                        <div  className="text-persona">
                            Sleepy Samantha  is a college student in her junior year studying CS; 
                            <br/>she often likes to snack on a variety of foods and spends most of 
                            <br/>her time doing homework in her room.
                        </div>                       
                    </div>

                    <div className="box">
                        <h2 className="section-header"><u>Persona 1</u></h2>
                        <ul className="list">
                            <li>
                                Samantha thinks that the drawer for the detergent 
                                does not have a properly labeled section to actually 
                                put in the detergent which made it hard for her to 
                                figure out where to pour detergent.
                            </li>  
                            <li>
                                Sleepy Samantha most closely resembles User 1 and
                                User 2 in personality and in lifestyle. Both User 1 and User 
                                2 have never used this washing machine before
                            </li>               
                        </ul>
                    </div>

                    <div className="image-persona">
                        <img src={persona2} alt="Image of the empathy map for persona 2" height="500" width="500"/>
                        <div  className="text-persona">
                            Motivated Max is a newly graduated student 
                            working as a civil servant; 
                            <br/> he really wants to help 
                            improve the lives of other people and likes to go
                            <br/>on hikes with his dog.

                        </div>                       
                    </div>

                    <div className="box">
                        <h2 className="section-header"><u>Persona 2</u></h2>
                            <ul className="list">
                            <li>
                                Motivated Max thinks that some of the options 
                                for the washing machine are a bit confusing 
                                and could be hard for first time users. For example he thinks
                                that the options for the soiled were a bit confusing becuase that
                                term is not very commonly used.
                

                            </li>  
                            <li>
                                Motivated Max mostly resembles User 3 in 
                                lifestyle and User 2 in personality. 
                                User 3 has used the washing machine before.
                            </li>               
                            </ul>
                    </div>

                    <h3 className = "sub-header"> 
                        <p id="storyboard-anchor">STORYBOARD</p>    
                    </h3>

                    <div className="box">
                    <p className="text"> This is a storyboard for Sleepy Samantha</p>
                        
                    </div>
                    <div  className = "image">
                        <img src = {storyboard1} alt = "image of a storyboard for sleepy samantha" height="500" width="800"/>
                    </div>
                    <div  className = "image">
                        <img src = {storyboard2} alt = "image of a storyboard for sleepy samantha" height="400" width="800"/>
                    </div>


                    <h3 className="sub-header">
                        CONCLUSION
                    </h3>

                    <div className="box">
                        <p className="text"> 
                        Overall this project taught me how to build personas based on observations and how to create a 
                        storyboard for the interactions between the user and the interface. I also learned what is 
                        important to look for when observing users and how to create good interview questions. Additionally,
                        it was really interesting constructing a storyboard and trying to emulate a persona that we created.
                        </p>
                    </div>


                </div>
            </div>
        </div>
    // </BrowserRouter>
  )
}

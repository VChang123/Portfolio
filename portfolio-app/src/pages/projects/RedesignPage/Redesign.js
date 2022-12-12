import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import Table from 'react-bootstrap/Table';
import "./Redesign.css"
import screenshot1 from "./assets/Screenshot1.PNG"
import screenshot2 from "./assets/Screenshot2.PNG"
import desktop1 from "./assets/Desktop - 1.png"
import desktop2 from "./assets/Desktop - 2.png"
import desktop3 from "./assets/Desktop - 3.png"
import styleguide from "./assets/styleguide.png"
import mobileAnnotated from "./assets/mobileAnnotated.png"
import mobilePrototype from "./assets/MobilePrototype.png"
import tabletAnnotated from "./assets/tabletAnnotated.png"
import tabletPrototype from "./assets/TabletPrototype.png"
import desktopAnnotated from "./assets/desktopAnnotated.png"
import desktopPrototype from "./assets/DesktopPrototype.png"




export default function Redesign() {
  return (
    <div className='redesign'>
        <div className='big-div'>
            <div className = "flex-child-left">
                <p className = "side-header">  
                    <Link to="#PartOne" >Part One</Link>
                </p>
                <p className = "side-header"> 
                    <Link to="#PartTwo">Part Two</Link> 
                    
                </p>
                <p className = "side-header"> 
                    <Link to="#PartThree" >Part Three</Link>
                
                </p>
            </div>

            <div className='flex-child-right'>

              <h1 className = "header" >RESPONSIVE REDESIGN</h1>
              <p >
                The goal of this assignment is was to practice the workflow of redesigning a simple website while
                learning the skills necessary to analyze and identify flaws in an existing interface, 
                create low-fidelity and high-fidelity prototypes for various screen sizes, and build a 
                responsive website based on those prototypes.

              </p>


              <div className="sub-header">
                <a id="PartOne">Part 1: Identifying Usability Problems</a>
              </div>

              <div className="box">
                <p className="section-header">
                  PICKING A WEBSITE
                </p> 
                <div className="display-image">
               
                  <img className="desktop-image" src={screenshot1} alt="Screenshot of the landing page for toronto cupcake"/>
                  <img className="desktop-image" src={screenshot2} alt="Screenshot of what the side bar looks like"/>
      
                </div>

                  <ul className="list">
                    <li>
                      This website for Toronto Cupcake was chosen because it does not necessarily 
                      have the best layout for users to easily navigate and 
                      overall seems a bit outdated

                    </li>
                    <li>
                      Here is the link to their website 
                      <a href="https://torontocupcake.com/index.html"> <u>Toronto Cupcake</u></a>
                    </li>
                  </ul>
              </div>  



               <div className="box-white-border">
                  <p className="section-header">
                    FINDING PROBLEMS
                  </p>


                  <Table  bordered hover>
                    <thead>
                      <tr>
                          
                          <th>Criteria</th>
                          <th>Observations</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Usability</td>
                        <td>
                            <ul className="list">
                              <li>
                                This websites design does not lend itself to being very 
                                user friendly especially if they are first time users
                                because it heavily relies on users having pre-existing 
                                knowledge of what certain icons do and the users intuitively 
                                having the desire to explore the page and scroll through the website
                              </li>
                              <li>
                                In addition, the location of the hamburger icon is in an awkward place and quite small.
                              </li>
                              <li>
                                The side bar that pops up also provides many 
                                options of which can overwhelm the user and 
                                confuse them as they are not very descriptive
                              </li>
                              <li>
                                The text on the website is also repetitive and 
                                has typos which is not the greatest for readability 
                              </li>
                              <li>
                                The interaction with the sidebar is poorly structured
                                because it some options have dropdowns that cover other options
                                on the side bar.

                              </li>

                            </ul>
                          </td>
                      </tr>
                      <tr>
                        <td>Learnability</td>
                        <td>
                            <ul className="list">
                              <li>
                                First Time users: It might be hard for them to figure out where 
                                the different tabs are located. This is because users need to scroll all the 
                                way down to see the different links to different pages or intuitively 
                                know that the hamburger icon means that a sidebar will pop up and have 
                                the different options
                              </li>
                              <li>
                                Once people visit the site more often, they will be able to easily 
                                figure out where to click to find the different options that the website offers

                              </li>
                              <li>
                                Even if the users are very proficient 
                                with the current website, it is not very efficient, there are 
                                2 clicks to get to the options or they need to scroll down 
                                to the bottom of the page in order to find the tabs. 
                              </li>
                            </ul>
                          </td>   
                      </tr>
                      <tr>
                        <td>Memorability</td>
                        <td >
                            <ul className="list">
                              <li>
                                The memorability of this website is not very good because  
                                the hamburger icon is small and in an awkward place.
                              </li>
                              <li>
                                Because the website landing page does not exactly 
                                fit the viewport height, users need to remember that 
                                options are at the bottom of the page and need to scroll in order to see them.
                                (The screenshots are zoomed out in order to capture the whole website)
                              </li>
                            </ul>
                          </td>
                      </tr>
                      <tr>
                        <td>Conceptual Model</td>
                        <td>
                            <ul className="list">
                              <li>
                                The conceptual model for this website is that the 
                                hamburger icon implies to the user that it is clickable 
                                and that there are more options.

                              </li>
                              <li>
                                The scroll bar on the side of the window indicates 
                                that there is more to the page and that some of the text is cut off
                              </li>
                            </ul>
                          </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>  


              <div className="box">
                <p className="section-header">
                  ACCESSIBILITY
                </p>
                <ul className="list">
                  <li>
                    Some of the warnings that were detected was 
                    that there are device specific interactions. 
                    For example they told users to click on a link and 
                    the link was repetitive which may cause confusion.
                  </li>
                  <li>
                    Another problem is that although some of the images have 
                    alternative descriptions, they are not very descriptive and 
                    not all the images have alternative descriptions
                  </li>
                </ul>
              </div>



              <div className="sub-header">
                <a id="PartTwo">Part 2: Visual Redesign</a> 

                </div>

                <div className="box">
                  <p className="section-header">
                    LOW-FIDELITY PROTOTYPE
                  </p>
                  <ul className="list">
                    <li>
                      This low-fidelity prototype was created using Balsamique Wireframes
                    </li>
                  </ul>
                  <img className="image" src={desktop1} alt="image of mobile phone lofi prototype"/>
                  <img className="image" src={desktop2} alt="image of tablet lofi prototype"/>
                  <img className="image" src={desktop3} alt="image of desktop lofi prototype"/>
              </div>

                        
              <div className="box-white-border">
                <p className="section-header">
                  STYLEGUIDE
                </p>
                <div className="style-guide">
                  <img src={styleguide} alt="Image of the syle guide for the Toronto Cupcake website" height="70%" width="70%"/>
                </div>
              </div>


              <div className="box">
                <p className="section-header">
                  HIGH-FIDELITY PROTOTYPE
                </p>
                <ul className="list">
                  <li>
                    This high-fidelity prototype was created with Figma
                  </li>
                </ul>

                <p className="section-header"> MOBILE PROTOTYPE</p>
                <div className="center-image">
                  <img className="image-prototype" src={mobileAnnotated}alt="Annotated mobile prototype"/>
                  <img className="image-prototype" src={mobilePrototype} alt = "mobile prototype"/>
                </div>

                <p className="section-header"> TABLET PROTOTYPE</p>
                <div className="center-image">
                  <img className="image-prototype" src={tabletAnnotated} alt="Annotated tablet prototype"/>
                  <img className="image-prototype" src={tabletPrototype} alt = "Tablet prototype"/>
                </div>
            

                <p className="section-header"> DESKTOP PROTOTYPE</p>
                <div className="center-image">
                  <img className= "image-prototype-desktop" src={desktopAnnotated} alt="Annotated desktop prototype"/>
                  <img className="image-prototype-desktop" src={desktopPrototype} alt = "Desktop prototype"/>
                </div>

              </div>

              <div className="sub-header">
                  <a id="PartThree">Part 3: Responsive Redesign</a>

              </div>

              <div>
                <button type="button" className="btn btn-outline-success">
                  <a href="https://sadopossum246.github.io/TorontoCupcake/" target="_blank" rel="noopener noreferrer">
                    Visit New Website</a>
                </button>
              </div>

                        
              <div className="sub-header">
                Conclusion

              </div>

              <div className="box-last">
                <ul className = "list">
                  <li>
                    This project helped me learn how the design and prototype process works, starting from an 
                    existing product and analyzing how it could be improved and then creating
                    different stages of prototypes 
                  </li>
                  <li>
                    I was also able to think about how to take designs and actually implement them in code form in 
                    order to make the designs a reality. While I was designing I had to keep in mind the 
                    people that I would be designing for and take into account accessibility.
                  </li>
                </ul>
              </div>


        </div>
      </div>
    </div>
  )
}

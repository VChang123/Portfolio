import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Redesign from './pages/projects/RedesignPage/Redesign';
import IterativeDesign from './pages/projects/IterativeDesignPage/IterativeDesign';
// import Development from './pages/projects/DevelopmentPage/Development';
// import LandingPage from './pages/LandingPage/LandingPage';
import AboutPage from './pages/AboutPage/AboutPage';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ContactPage from './pages/ContactPage/ContactPage';
import PersonaPage from './pages/projects/PersonaPage/PersonaPage';
import Development from './pages/projects/DevelopmentPage/Development';
import ScrollToTop from './ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <BrowserRouter>
      <ScrollToTop/>
      <NavBar/>
      <Routes>
          <Route exact path="/Portfolio" element={  <App /> }/>
  
          <Route path='/Portfolio/about' element={<AboutPage/>}>
          </Route>
          <Route path='/Portfolio/projects' element={  <ProjectsPage/>}>
         
          </Route>
          <Route path='/Portfolio/contact' element={<ContactPage/>}>
            
          </Route>
          <Route path='/Portfolio/persona' element={ <PersonaPage/>}>
           
          </Route>
          <Route path='/Portfolio/redesign' element = {<Redesign/>}>
            
          </Route>
          <Route path='/Portfolio/iterative' element ={<IterativeDesign/>}>

          </Route>
          <Route path='/Portfolio/development' element={<Development/>}></Route>
        </Routes>

      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

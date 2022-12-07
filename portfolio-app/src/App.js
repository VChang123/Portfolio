import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import AboutPage from './pages/AboutPage/AboutPage';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ContactPage from './pages/ContactPage/ContactPage';
import PersonaPage from './pages/projects/PersonaPage/PersonaPage';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import Redesign from './pages/projects/RedesignPage/Redesign';
import IterativeDesign from './pages/projects/IterativeDesignPage/IterativeDesign';
import Development from './pages/projects/DevelopmentPage/Development';




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        {/* <LandingPage/>
        <AboutPage/>
        <ProjectsPage/>
        <ContactPage/> */}

        <Switch>
          <Route exact path="/">
            <LandingPage/>
            <AboutPage/>
            <ProjectsPage/>
            <ContactPage/>
          </Route>
          <Route path='/about'>
            <AboutPage/> 
          </Route>
          <Route path="/projects">
            <ProjectsPage/>
          </Route>
          <Route path='/contact'>
            <ContactPage/>
          </Route>
          <Route path='/persona'>
            <PersonaPage/>
          </Route>
          <Route path='/redesign'>
            <Redesign/>
          </Route>
          <Route path='/iterative'>
            <IterativeDesign/>
          </Route>
        </Switch>


        {/* <Development/> */}
        {/* <IterativeDesign/> */}
        {/* <Redesign/> */}
        {/* <PersonaPage/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;

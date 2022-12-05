import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import AboutPage from './pages/AboutPage/AboutPage';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ContactPage from './pages/ContactPage/ContactPage';
import PersonaPage from './pages/projects/PersonaPage/PersonaPage';




function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <LandingPage/>
      <AboutPage/>
      <ProjectsPage/>
      <ContactPage/> */}
      <PersonaPage/>
    </div>
  );
}

export default App;

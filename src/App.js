import './App.css';
import Banner from './components/Banner';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <body>
      <NavBar></NavBar>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </body>
  );
}

export default App;

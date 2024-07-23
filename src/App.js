import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import About from './components/About';
import { Link, Element } from 'react-scroll';
import Wave from './components/Wave';
import Hobbies from './components/Hobbies';
import SecondWave from './components/SecondWave';
import WaveB from './components/WaveB';
import WaveA from './components/WaveA';


function App() {
  return (
    <div className="custom-cursor">
      <Header />
      {/* <Element name="about"> */}
        <About />
      {/* </Element> */}
      {/* <Wave /> */}
      <SecondWave />
      {/* <Element name="skills"> */}
        <Skills />
      {/* </Element> */}
      <WaveA
        color={"#C5C3E3"}
      />
      <WaveB
        color={"lilac"}
      />
      {/* <Element name="projects"> */}
        <Projects />
      {/* </Element> */}
      <WaveA
        color={"#D5E6FB"}
      />
      <WaveB
        color={"blue"}
      />
      {/* <Element name="hobbies"> */}
        <Hobbies />
      {/* </Element> */}
      <WaveA
        color={"#F5B8CC"}
      />
      <WaveB
        color={"pink"}
      />
      {/* <Element name="contact"> */}
        <Contact />
      {/* </Element> */}
      <Footer />
    </div>
  );
}

export default App;

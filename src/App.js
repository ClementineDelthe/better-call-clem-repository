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
import './i18n';

function App() {

  return (
    <div className="custom-cursor">
      <Header />
      <About />
      <SecondWave />
      <Skills />
      <WaveA
        lightColor={"#C5C3E3"}
        darkColor={"#554BF8"}
      />
      <WaveB
        color={"bg-lilac dark:bg-blue"}
      />
      <Projects />
      <WaveA
        lightColor={"#025548"}
        darkColor={"#F882FB"}
      />
      <WaveB
        color={"bg-green dark:bg-fushia"}
      />
      <Hobbies />
      <WaveA
        // lightColor={"#F5B8CC"}
        // darkColor={"#333333"}
        lightColor={"#F5B8CC"}
        darkColor={"#BEF840"}

      />
      <WaveB
        color={"bg-pink dark:bg-lime"}
      />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

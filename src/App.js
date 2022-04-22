import About from './About';
import AboutMe from './AboutMe';
import './App.css';
import Footer from './footer';
import Myskills from './Myskills';
import Navbar from './Navbar'
import Projects from './Projects';
const App =()=> {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <AboutMe />
      <Myskills />
      <Footer />
    </div>
  );
}

export default App;

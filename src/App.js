import './App.css';
import Navbar from './Navbar/Navbar';
import About from './About-component/About';
import Education from './Education-component/Education';
import Portfolio from './Portfolio-component/Portfolio';
import Contact from './Footer/contact';
import Certification from './Certification/Certification';

const App = () => {
  return (
    <div className="App">
      <div className='App-Header'>
        <Navbar />
          </div>
            <About />
            <Certification />
            <Portfolio />
            <Education />
            <Contact />
          </div>
  );
}

export default App;

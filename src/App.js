
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Experience from './Components/Experience/Experience';
import Works from './Components/Works/Works';
import Service from './Components/Services/Service';
import Slider from './Components/Slider/Slider';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import './Components/Navbar/Navbar.css';
import './App.css'
import { useContext } from 'react';
import { ThemeContext } from './context';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{
      background : darkMode? 'black': '',
      color: darkMode? 'white': ''
    }}>
      <Navbar />
      <Intro/>
      <Service/>
      <Experience/>
      <Works/>
      <Slider/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

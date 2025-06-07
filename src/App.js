import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Timeline from './Components/Timeline/Timeline';
import events from './Data/events.json';
import About from './Components/About/About';
import ProjCards from './Components/ProjCards/ProjCards';
import Loader from './Components/Loader/Loader';
import Skills from './Components/Skills/Skills';
import ScrollUp from './Components/ScrollUp/ScrollUp';
import Contact from './Components/Contact/Contact';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    loading ? (
      <Loader />
    ) : (
      <div className="App">
        <Navigation />
        <div className="slide-in">
          <Home />
          <ScrollUp />
          <About />
          <Timeline events={events} />
          <Skills />
          <ProjCards />
          <Contact />
        </div>
        <Footer />
      </div>
    )
  );
}

export default App;

import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import React from 'react';
import Timeline from './Components/Timeline/Timeline';
import events from './Data/events.json';
import About from './Components/About/About';
import ProjCards from './Components/ProjCards/ProjCards';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Timeline events={events} />
      <ProjCards />
      <Footer />
    </div>
  );
}

export default App;

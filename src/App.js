import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import React from 'react';
import Timeline from './Components/Timeline/Timeline';
import events from './Data/events.json';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Timeline events={events} />
      <Footer />
    </div>
  );
}

export default App;

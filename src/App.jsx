import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/sections/Navbar';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Work from './components/sections/Work';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Navbar />
        <Home />
        <About />
        <Work />
        <Footer />
      </div>
    </div>
  );
}

export default App;

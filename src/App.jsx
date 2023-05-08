import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/sections/Navbar';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Work from './components/sections/Work';
import Footer from './components/sections/Footer';

function App() {
  const [count, setCount] = useState(0);

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

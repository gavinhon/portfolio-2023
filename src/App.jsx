import { lazy, Suspense } from 'react';
import './App.css';
import Navbar from './components/sections/Navbar';
import Home from './components/sections/Home';
import { DataProvider } from './context/DataContext';
const About = lazy(() => import('./components/sections/About'));
const Work = lazy(() => import('./components/sections/Work'));
const Footer = lazy(() => import('./components/sections/Footer'));

function App() {
  return (
    <DataProvider>
      <div className='App'>
        <div className='container'>
          <Navbar />
          <Home />
          <Suspense fallback={<></>}>
            <About />
            <Work />
            <Footer />
          </Suspense>
        </div>
      </div>
    </DataProvider>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';

function App() {
  return (
    // <div> App </div>
    <>
    <Navbar></Navbar>
    <div className='cotainer'>
      <Hero></Hero>
      <Skills></Skills>
    </div>
    </>
  );
}

export default App;

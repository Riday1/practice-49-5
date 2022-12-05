import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div >
      <Nav></Nav>
      <Home></Home>
    </div>
  );
}

export default App;

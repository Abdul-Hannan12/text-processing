import './styles/App.css';
import './styles/toggle.css';
import './styles/nav.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import About from './components/About';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0f0e26';
      document.body.style.color = 'white';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#0f0e26';
    }
  }

  return (
    <>
    <Router>
    <Navbar mode={mode} toggle={toggleMode} />
      <Routes>
        <Route path='/' element={<TextForm placeholder="Enter Text Here" mode={mode} />}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

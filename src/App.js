import './styles/App.css';
import './styles/toggle.css';
import './styles/nav.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import { useState } from 'react';

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
    <Navbar mode={mode} toggle={toggleMode} />
    <TextForm placeholder="Enter Text Here" />
    </>
  );
}

export default App;

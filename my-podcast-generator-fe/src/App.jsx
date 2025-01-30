
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home'
import Nav from './components/nav'
import TextToSpeech from './components/textToSpeech'

import './App.css'
const GenerateScripts = () => {
  return ( 
    <div>
      <h2>Generate Scripts</h2>
      <p>Uniting Internet, Internet Appears, Internet Apps</p>
      <button>Start Scripts</button>
    </div>
  );
};

const SendScripts = () => {
  return (
    <div>
      <h2>Send Scripts</h2>
      <p>Send Texts & My Project to Generate A/S, Lift Text from Audio</p>
      <button>Send Script to Promoted</button>
    </div>
  );
};

const PodcastInterface = () => {
  return (
    <div>
      <h2>Podcast Interface</h2>
      <p>Script Disciplined Motion Player, User Check Play, At Next Begin Speaking, User Access, Action Launch, Speed Advanced</p>
    </div>
  );
};

const StepProgress = () => {
  return (
    <div>
      <h2>Step Progress</h2>
      <p>Progress Disciplined</p>
    </div>
  );
};

const ScriptTree = () => {
  return (
    <div>
      <h2>Script Tree</h2>
      <p>Process Code</p>
    </div>
  );
};


function App() {
  
  return (
     <div className="App">
        <h1>My Podcast Generator</h1>
      <Router>
      <div>
        <nav>
          <Link className='nav-item' to="/">Home</Link> | 
          <Link className='nav-item' to="/text">Text to Speech</Link> | 
          <Link className='nav-item' to="/existing2">Audio to Text</Link> | 
          {/* <Link className='nav-item' to="/generate">Generate Scripts</Link> | 
          <Link className='nav-item' to="/send">Send Scripts</Link> | 
          <Link className='nav-item' to="/podcast">Podcast Interface</Link> | 
          <Link className='nav-item' to="/progress">Step Progress</Link> | 
          <Link className='nav-item' to="/script-tree">Script Tree</Link> */}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/text" element={<TextToSpeech />} />
          {/* <Route path="/existing2" element={<ExistingComponent2 />} /> */}
          <Route path="/generate" element={<GenerateScripts />} />
          <Route path="/send" element={<SendScripts />} />
          <Route path="/podcast" element={<PodcastInterface />} />
          <Route path="/progress" element={<StepProgress />} />
          <Route path="/script-tree" element={<ScriptTree />} />
        </Routes>
      </div>
    </Router>
    </div>
  )
}

export default App


import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home'

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
      
      <Router>
      <div>
        <h1>United Audio</h1>
        <nav>
          <Link to="/"><Home /></Link> | 
          <Link to="/text">Text to Speech</Link> | 
          {/* <Link to="/existing2">Existing Component 2</Link> |  */}
          <Link to="/generate">Generate Scripts</Link> | 
          <Link to="/send">Send Scripts</Link> | 
          <Link to="/podcast">Podcast Interface</Link> | 
          <Link to="/progress">Step Progress</Link> | 
          <Link to="/script-tree">Script Tree</Link>
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


import React, { useState, useEffect } from 'react';
import './css/textToSpeech.css'

// VoiceSelector Component
const VoiceSelector = ({ voices, selectedVoice, onChange }) => (
  <div>
    <label htmlFor="voice-select">Voice</label>
    <select id="voice-select" value={selectedVoice} onChange={onChange}>
      {voices.map((voice, index) => (
        <option key={index} value={voice.name}>
          {voice.name} ({voice.lang})
        </option>
      ))}
    </select>
  </div>
);

// RateAndPitchControls Component
const RateAndPitchControls = ({ rate, pitch, onRateChange, onPitchChange }) => (
  <div>
    <div>
      <label htmlFor="rate">Rate</label>
      <input
        id="rate"
        type="range"
        min="0.5"
        max="2"
        step="0.1"
        value={rate}
        onChange={(e) => onRateChange(parseFloat(e.target.value))}
      />
      <span>{rate}</span>
    </div>
    <div>
      <label htmlFor="pitch">Pitch</label>
      <input
        id="pitch"
        type="range"
        min="0"
        max="2"
        step="0.1"
        value={pitch}
        onChange={(e) => onPitchChange(parseFloat(e.target.value))}
      />
      <span>{pitch}</span>
    </div>
  </div>
);

// Main TextToSpeech Component
const TextToSpeech = () => {
  const [text, setText] = useState('');
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState('');
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);

  useEffect(() => {
    // Load available voices and update state
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      if (availableVoices.length > 0) {
        setSelectedVoice(availableVoices[0].name);
      }
    };

    // Handle the voiceschanged event (some browsers require it)
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const handleSpeak = () => {
    if (!text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices.find((voice) => voice.name === selectedVoice);
    utterance.rate = rate;
    utterance.pitch = pitch;
    window.speechSynthesis.speak(utterance);
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
  };

  return (
    <div>
      <h1>Text-to-Speech App</h1>
      <textarea
        placeholder="Enter text here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <VoiceSelector
        voices={voices}
        selectedVoice={selectedVoice}
        onChange={(e) => setSelectedVoice(e.target.value)}
      />
      <RateAndPitchControls
        rate={rate}
        pitch={pitch}
        onRateChange={setRate}
        onPitchChange={setPitch}
      />
      <button onClick={handleSpeak}>Speak</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default TextToSpeech;
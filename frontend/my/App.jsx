import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartRecording from './src/components/StartRecording/StartRecoding';
import AllRecordings from './src/components/AllRecordings/AllRecordings';
import Home from './src/components/pages/Home';
import Navbar from './src/components/Navbar/Navabar';
import "./App.css"
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start-recording" element={<StartRecording />} />
        <Route path="/all-recordings" element={<AllRecordings />} />
      </Routes>
    </Router>
  );
}

export default App;

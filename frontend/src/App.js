// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage.jsx';
import CharacterList from './components/CharacterList';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<div className="no-scroll"><HomePage /></div>} />
          <Route path="/characters" element={<div className="scroll"><CharacterList /></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


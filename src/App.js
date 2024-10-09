import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Discover from './pages/Discover';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/tech" element={<Discover />} />
          <Route path="/finance" element={<Discover />} />
          <Route path="/arts" element={<Discover />} />
          <Route path="/sports" element={<Discover />} />
          <Route path="/entertainment" element={<Discover />} />
          <Route path="/shuffle" element={<Discover />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

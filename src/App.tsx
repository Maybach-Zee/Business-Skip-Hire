import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SkipSelectionPage from './pages/SkipSelectionPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Redirect from root (/) to /select-skip */}
        
          <Route path="/" element={<Navigate to="/select-skip" replace />} />

          {/* Main route */}
          <Route path="/select-skip" element={<SkipSelectionPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
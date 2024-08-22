import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Pages } from './Exports/Pages';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pages.Login/>} />
        <Route path="/Home" element={<Pages.Home/>} />
        <Route path="/*" element={<div>404</div>} />

      </Routes>
    </Router>
  );
}

export default App;

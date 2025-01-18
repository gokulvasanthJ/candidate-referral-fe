import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ReferralForm from './components/ReferralForm';
import Navbar from './components/Navbar';
import CandidateCard from './components/CandidateCard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard/>} /> {/* Add your Dashboard component */}
        <Route path="/refer" element={<ReferralForm />} /> {/* Ensure the ReferralForm component exists */}
        <Route path="/candidate-card" element={<CandidateCard />} />
        {/* Add more routes as necessary */}
      </Routes>
    </Router>
  );
}

export default App;

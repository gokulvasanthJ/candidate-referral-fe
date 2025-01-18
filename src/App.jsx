import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ReferralForm from "./components/ReferralForm";

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Candidate Referral Management System</h1>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/refer" element={<ReferralForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

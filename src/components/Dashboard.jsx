import React, { useContext } from 'react';
import { CandidateContext } from '../contexts/CandidateContext';

const Dashboard = () => {
  const { candidates, filterCandidates } = useContext(CandidateContext);
  
  // Example usage of filterCandidates
  const filteredCandidates = filterCandidates('referred'); // Example filter criteria

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {filteredCandidates.map(candidate => (
          <li key={candidate.id}>{candidate.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;

import React, { useContext } from "react";
import { CandidateContext } from "../contexts/CandidateContext";

const Dashboard = () => {
  const { candidates } = useContext(CandidateContext);

  if (!candidates) {
    return <p>Loading...</p>; // Handle undefined candidates gracefully
  }

  return (
    <div>
      <h2>Candidate Dashboard</h2>
      {candidates.length > 0 ? (
        candidates.map((candidate, index) => (
          <div key={index}>
            <p>Name: {candidate.name}</p>
            <p>Job Title: {candidate.jobTitle}</p>
            <p>Status: {candidate.status}</p>
          </div>
        ))
      ) : (
        <p>No candidates available.</p>
      )}
    </div>
  );
};

export default Dashboard;

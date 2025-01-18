import React, { createContext, useState } from 'react';

// Create context
export const CandidateContext = createContext();

const CandidateContextProvider = ({ children }) => {
  const [candidates, setCandidates] = useState([]);
  
  // Define filterCandidates function
  const filterCandidates = (criteria) => {
    return candidates.filter(candidate => candidate.status === criteria);
  };

  return (
    <CandidateContext.Provider value={{ candidates, setCandidates, filterCandidates }}>
      {children}
    </CandidateContext.Provider>
  );
};

export default CandidateContextProvider;

import React, { createContext, useState } from "react";

// Create the context
export const CandidateContext = createContext();

// Create the provider component
const ContextProvider = ({ children }) => {
  const [candidates, setCandidates] = useState([]);

  return (
    <CandidateContext.Provider value={{ candidates, setCandidates }}>
      {children}
    </CandidateContext.Provider>
  );
};

export default ContextProvider;

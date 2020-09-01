import React, { createContext, useState } from 'react';

export const ResultsContext = createContext();

export const ResultsProvider = ({ children }) => {
  const [showResults, setShowResults] = useState(false);

  return (
    <ResultsContext.Provider value={{ showResults, setShowResults }}>
      {children}
    </ResultsContext.Provider>
  );
};

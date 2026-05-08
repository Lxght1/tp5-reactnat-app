import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [hasOnboarded, setHasOnboarded] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: '',
    username: '',
    rank: '',
    team: ''
  });

  return (
    <AppContext.Provider value={{ hasOnboarded, setHasOnboarded, userProfile, setUserProfile }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
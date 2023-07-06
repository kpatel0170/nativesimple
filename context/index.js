import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = (userData) => {
    // Perform login logic and set the user state
    setUser(userData);
  };

  const logout = () => {
    // Perform logout logic and reset the user state
    setUser(null);
  };

  const authContextValue = {
    user,
    isLoading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

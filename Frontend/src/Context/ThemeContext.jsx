import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => {
    setIsLightMode((prev) => !prev);
  };

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
      document.body.classList.add('LightMode'); // Supporting both naming conventions found in code
    } else {
      document.body.classList.remove('light-mode');
      document.body.classList.remove('LightMode');
    }
  }, [isLightMode]);

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

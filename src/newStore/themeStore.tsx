import React, { createContext, useContext, useState } from "react";


const ThemeContext = createContext<{ theme: string; toggleTheme: () => void } | undefined>(undefined);


export const useThemeStore = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeStore must be used within a ThemeProvider");
  }
  return context;
};


export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState("light"); 
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light")); 
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


import { useState, createContext } from "react";

export const ThemeContext = createContext();

const Theme = ({ children }) => {
  const [dark, setDark] = useState(true);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Theme;

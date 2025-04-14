// // src/contexts/ThemeContext.js
// import React, { createContext, useState, useEffect, useContext } from "react";

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [darkMode, setDarkMode] = useState(false);

//   // Toggle the theme between dark and light
//   const toggleTheme = () => {
//     setDarkMode((prevMode) => !prevMode);
//   };

//   // Optional: Read theme from localStorage on load
//   useEffect(() => {
//     const storedTheme = localStorage.getItem("darkMode") === "true";
//     setDarkMode(storedTheme);
//   }, []);

//   // Save theme choice to localStorage when changed
//   useEffect(() => {
//     localStorage.setItem("darkMode", darkMode);
//   }, [darkMode]);

//   // The theme string used to set a data attribute on the document element
//   const theme = darkMode ? "dark" : "light";

//   return (
//     <ThemeContext.Provider value={{ darkMode, toggleTheme, theme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// // Custom hook for easier consumption of the theme context
// export const useTheme = () => useContext(ThemeContext);

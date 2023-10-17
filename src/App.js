import React, { useState } from 'react';
import './App.css';
import { MovieProvider } from './contexts/MovieContext';
import LandingPage from "./components/LandingPage";
import Navbar from './components/Navbar';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    if (currentTheme === 'dark') {
      document.documentElement.setAttribute('data-bs-theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      setIsDarkMode(true);
    }
  };
  return (
    <MovieProvider>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <LandingPage />
    </MovieProvider>
  );
}

export default App;

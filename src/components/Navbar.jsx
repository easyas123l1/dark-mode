import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const initialvalue = {
  dark: false
}

const Navbar = () => {


  const [darkMode, setDarkMode] = useDarkMode('darkMode', initialvalue);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;

import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../main';
import { useState } from 'react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    document.body.classList.toggle('dark');
    setDarkMode(!darkMode);
  };

  return (
    <header className="country-header-with-toggle">
      <h2>Where in the world?</h2>
      <button onClick={handleDarkMode}>
        {!darkMode ? (
          <div className="black-icon">
            <FontAwesomeIcon icon={faMoon} /> <span>Dark Mode </span>
          </div>
        ) : (
          <div className="white-icon">
            <FontAwesomeIcon icon={faSun} /> <span>Light Mode </span>
          </div>
        )}
      </button>
    </header>
  );
};

export default Header;

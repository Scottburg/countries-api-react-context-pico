import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="country-header-with-toggle">
      <h5>Where in the world?</h5>
      <button>
        <FontAwesomeIcon icon={faMoon} />
        Dark Mode
      </button>
    </header>
  );
};

export default Header;

import { FaSearch } from 'react-icons/fa';
import './Header.styles.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="/">
            <h1>LOGO</h1>
          </a>
        </div>

        <nav className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/campaign" className="nav-link">
                Campaign
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="search-container">
          <div className="search-wrapper">
            <FaSearch className="search-icon" />
            <input type="text" className="search-input" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

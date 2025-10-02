import { Link, useLocation } from 'react-router-dom';
import './Header.css';

/**
 * Header Component
 * Responsive navigation header with logo and navigation links
 */
const Header = () => {
  const location = useLocation();

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-section">
          <Link to="/" className="logo-link">
            <div className="logo">
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 32 32" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="logo-icon"
              >
                <rect width="32" height="32" rx="8" fill="#3B82F6"/>
                <path 
                  d="M8 12h16v2H8v-2zm0 4h16v2H8v-2zm0 4h12v2H8v-2z" 
                  fill="white"
                />
              </svg>
              <span className="logo-text">ProductCatalog</span>
            </div>
          </Link>
        </div>

        {/* Navigation Section */}
        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${isActiveLink('/') ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/products" 
                className={`nav-link ${isActiveLink('/products') ? 'active' : ''}`}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/about" 
                className={`nav-link ${isActiveLink('/about') ? 'active' : ''}`}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" aria-label="Toggle mobile menu">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
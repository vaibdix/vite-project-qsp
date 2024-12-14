import styles from './FlipKartHeader.module.css';
import { useState } from 'react';

const FlipKartHeader = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* Logo Section */}
        <div className={styles.logoContainer}>
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
            alt="Flipkart"
            className={styles.logo}
          />
        </div>

        {/* Search Bar */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className={styles.searchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className={styles.searchButton}>
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* Navigation Items */}
        <div className={styles.navItems}>
          <button className={styles.loginButton}>
            Login
            <i className="fas fa-chevron-down"></i>
          </button>
          <div className={styles.cart}>
            <i className="fas fa-shopping-cart"></i>
            <span>Cart</span>
          </div>

          <a href="#" className={styles.navLink}>
            Become a Seller
          </a>

          <div className={styles.dropdown}>
            <span>More</span>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FlipKartHeader;

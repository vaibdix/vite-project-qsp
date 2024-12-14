import React from 'react';
import styles from './Header.module.css';

const Header = ({ data, cartItemsCount, onCartClick }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span>Brand Logo</span>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>Home</li>
          <li className={styles.navItem}>About</li>
          <li className={styles.navItem}>Contact</li>
          {data.isLogedIn && (
            <li className={styles.navItem}>
              <button onClick={onCartClick} className={styles.cartButton}>
                Cart ({cartItemsCount})
              </button>
            </li>
          )}
          {data.isLogedIn ? (
            <li>
              <button onClick={() => data.setIssLogedIn(false)} className={styles.logoutButton}>
                Logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <button onClick={() => data.setIssLogedIn(true)} className={styles.loginButton}>
                  Login
                </button>
              </li>
              <li>
                <button onClick={() => data.setIssLogedIn(true)} className={styles.signupButton}>
                  Sign Up
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

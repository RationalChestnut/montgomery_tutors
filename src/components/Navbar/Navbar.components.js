import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showItems, setShowItems] = useState(false);

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <a href="#home">
            <img src={logo} alt="CodeUp Logo" className={styles.logo} />
          </a>
        </div>
        <div className={styles.linksContainer}>
          <div className={styles.links}>
            <a href="#home" className={styles.link}>
              Home
            </a>
            <a href="#benefits" className={styles.link}>
              About Us
            </a>
            <a href="#team" className={styles.link}>
              Meet the Team
            </a>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <a href="#enroll">
            <button className={styles.button}>Schedule a session</button>
          </a>
        </div>

        <GiHamburgerMenu
          className={styles.burger}
          onClick={() => setShowItems(!showItems)}
        />
      </div>
      {showItems && (
        <div className={styles.mobileLinksContainer}>
          <a
            href="#home"
            className={styles.mobileLink}
            onClick={() => setShowItems(false)}
          >
            Home
          </a>
          <a
            href="#benefits"
            className={styles.mobileLink}
            onClick={() => setShowItems(false)}
          >
            About Us
          </a>
          <a
            href="#team"
            className={styles.mobileLink}
            onClick={() => setShowItems(false)}
          >
            Meet the Team
          </a>

          <a href="#enroll">
            <button
              className={styles.mobileButton}
              onClick={() => setShowItems(false)}
            >
              Schedule a session
            </button>
          </a>
          <hr className={styles.horizontal} />
        </div>
      )}
    </div>
  );
};

export default Navbar;

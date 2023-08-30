import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [isSmallScreen, setSmallScreen] = useState(window.innerWidth < 780);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth < 780);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpacity : ""}`}>
      <div className={styles.container}>
        {isSmallScreen ? (
          <>
            <div className={styles.burgerMenu} onClick={toggleMenu}>
              ☰
            </div>
            {isMenuOpen && (
              <div className={styles.dropdownMenu}>
                <div className={styles.closeMenu} onClick={toggleMenu}>
                  &times;
                </div>
                <ul className={styles.nav_ul}>
                  <li>
                    <NavLink to="/home" className={styles.nav.a}>
                      About Me
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/experiences" className={styles.nav.a}>
                      Experiences
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/projects" className={styles.nav.a}>
                      Projects
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/projects" className={styles.nav.a}>
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/projects" className={styles.nav.a}>
                      Music
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/projects" className={styles.nav.a}>
                      Closet-Cleanup
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" className={styles.nav.a}>
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <>
            <div className={styles.Home}>
              <NavLink to="/" className={styles.aboutMeLink}>
                Home
              </NavLink>
            </div>
            <div className={styles.links}>
              <ul className={styles.nav_ul}>
                <li>
                  <NavLink to="/about-me" className={styles.nav.a}>
                    About Me
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/experiences" className={styles.nav.a}>
                    Experiences
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/projects" className={styles.nav.a}>
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blog" className={styles.nav.a}>
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/music" className={styles.nav.a}>
                    Music
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/closet-cleanup" className={styles.nav.a}>
                    Closet-Cleanup
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className={styles.contactMe}>
              <NavLink to="/contact" className={styles.aboutMeLink}>
                Contact
              </NavLink>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

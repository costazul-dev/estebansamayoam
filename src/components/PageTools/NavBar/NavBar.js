import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

const linkClass =
  windowWidth > 1134
    ? styles.nav_a
    : windowWidth > 750
    ? styles.nav_a_shrink
    : styles.nav_a;


  return (
    <nav className={styles.nav}>
      <div className={styles.Home}>
        <NavLink to="/home" className={styles.aboutMeLink}>
          Home
        </NavLink>
      </div>
      <div className={styles.links}>
        {windowWidth > 750 ? (
          <ul className={styles.nav_ul}>
            <li>
              <NavLink to="/home" className={linkClass}>
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
          </ul>
        ) : (
          <div className={styles.dropdownMenu}>
            <button onClick={toggleDropdown}>Menu</button>
            {isDropdownOpen && (
              <ul className={styles.dropdownList}>
                <li>
              <NavLink to="/home" className={linkClass}>
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
              </ul>
            )}
          </div>
        )}
      </div>
      <div className={styles.contactMe}>
        <NavLink to="/contact" className={styles.aboutMeLink}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;

import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.Home}>
          <NavLink to="/home" className={styles.aboutMeLink}>
            Home
          </NavLink>
        </div>
        <div className={styles.links}>
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
          </ul>
        </div>
        <div className={styles.contactMe}>
          <NavLink to="/contact" className={styles.aboutMeLink}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

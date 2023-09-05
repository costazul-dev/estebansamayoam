import React from "react";
import linkedinImage from "../../../assets/images/linkedin.png"; // Adjust the relative path as needed
import githubImage from "../../../assets/images/github.png"; // Adjust the relative path as needed
import spotifyImage from "../../../assets/images/spotify.png"; // Adjust the relative path as needed
import styles from "./ContactBlock.module.css";

const ContactBlock = () => {
  return (
    <div className={styles.ContactBlock}>
      <a
        href="https://www.linkedin.com/in/estebansamayoa/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.LinkedIn}>
          <img src={linkedinImage} alt="LinkedIn" />
        </div>
      </a>
      <a
        href="https://github.com/costazul-dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.GitHub}>
          <img src={githubImage} alt="GitHub" />
        </div>
      </a>
      <a
        href="https://open.spotify.com/user/edsasaes?si=a20f36aa566c43cf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.Spotify}>
          <img src={spotifyImage} alt="Spotify" />
        </div>
      </a>
    </div>
  );
};

export default ContactBlock;

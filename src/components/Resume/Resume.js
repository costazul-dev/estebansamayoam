import React from "react";

import NavBar from "../PageTools/NavBar/NavBar";
import Title from "../PageTools/Title/Title";

import styles from "./Resume.module.css";

const Resume = () => {
  return (
    <div className={styles.Resume}>
      <NavBar />
      <div className={styles.Content}>
        <div className={styles.TitleContainer}>
          <Title title="Resume" />
        </div>
      </div>
    </div>
  );
};

export default Resume;

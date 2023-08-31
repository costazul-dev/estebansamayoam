import React from "react";

import styles from "./ResumeSectionTitle.module.css";

const ResumeSectionTitle = ({ title }) => {
  return (
    <div className={styles.Title}>
      <h2>{title}</h2>
    </div>
  );
};

export default ResumeSectionTitle;

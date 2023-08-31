import React from "react";

import styles from "./Title.module.css";

const Title = ({ title, h }) => {
  if (h === 3) {
    return (
      <div className={styles.Title}>
        <h3>{title}</h3>
      </div>
    );
  }
  else if (h === 2) {
    return (
      <div className={styles.Title}>
        <h2>{title}</h2>
      </div>
    );
  } else {
    return (
      <div className={styles.Title}>
        <h1>{title}</h1>
      </div>
    );
  }
};

export default Title;

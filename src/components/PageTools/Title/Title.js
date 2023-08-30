import React from "react";

import styles from "./Title.module.css";

const Title = ( {title} ) => {
  return (
    <div className={styles.Title}>
      <h1>{title}</h1>
    </div>
  );
};

export default Title;

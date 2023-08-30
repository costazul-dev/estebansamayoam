import React from "react";

import ContentBlock from "../ContentBlock/ContentBlock";

import styles from "./ContentsContainer.module.css";

const ContentsContainer = ({ list }) => {
  return (
    <div className={styles.ContentsContainer}>
      {list.map((experience, index) => (
        <div className={styles.Block}>
          <ContentBlock key={index} experience={experience} />
        </div>
      ))}
    </div>
  );
};

export default ContentsContainer;

import React from "react";

import ContentBlock from "../ContentBlock/ContentBlock";

import styles from "./ContentsContainer.module.css";

const ContentsContainer = ({ list }) => {
  return (
    <div className={styles.ContentsContainer}>
      {list.map((experience, index) => (
        <ContentBlock key={index} experience={experience} />
      ))}
    </div>
  );
};

export default ContentsContainer;

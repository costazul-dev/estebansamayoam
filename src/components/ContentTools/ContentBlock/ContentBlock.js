import React from "react";

import styles from "./ContentBlock.module.css";

const ContentBlock = ({ experience }) => {
  return (
    <div className={styles.ContentBlock}>
      <div className={styles.TopContainers}>
        <div className={styles.ExperienceDescriptionContainer}>
          <h3>{experience.description}</h3>
        </div>
        <div className={styles.TimePeriodContainer}>
          <p>{experience.timePeriod}</p>
        </div>
      </div>
      <div className={styles.TitleContainer}>
        <p>{experience.title}</p>
      </div>
      <div className={styles.BulletsContainer}>
        <ul>
          {experience.bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContentBlock;

import React from "react";

import NavBar from "../../PageTools/NavBar/NavBar";
import ContentsContainer from "../../ContentTools/ContentContainer/ContentsContainer";
import Title from "../../PageTools/Title/Title";
import professionalExperiences from "../../../assets/professionalExperiences.json"
import BrushCricle from "../../PageTools/BrushCircle/BrushCircle";

import styles from "./Experiences.module.css";

const Experiences = () => {
  return (
    <div className={styles.Experiences}>
      <NavBar />
      <div className={styles.Content}>
        <BrushCricle />
        <div className={styles.TitleContainer}>
          <Title title="Experiences" />
        </div>
        <div className={styles.ContentsContainer}>
          <ContentsContainer list={professionalExperiences}/>
        </div>
      </div>
    </div>
  );
};

export default Experiences;

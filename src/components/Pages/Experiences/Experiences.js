import React from "react";

import NavBar from "../../PageTools/NavBar/NavBar";
import ContentsContainer from "../../ContentTools/ContentContainer/ContentsContainer";
import Title from "../../PageTools/Title/Title";
import projects from "../../../assets/projects.json"
import BrushCricle from "../../PageTools/BrushCircle/BrushCircle";

import styles from "./Experiences.module.css";

const Experiences = () => {
  return (
    <div className={styles.Experiences}>
      <NavBar />
      <div className={styles.Content}>
        <BrushCricle />
        <div className={styles.TitleContainer}>
          <Title title="Projects" />
        </div>
        <div className={styles.ContentsContainer}>
          <ContentsContainer list={projects}/>
        </div>
      </div>
    </div>
  );
};

export default Experiences;

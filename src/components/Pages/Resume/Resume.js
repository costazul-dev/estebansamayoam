import React from "react";

import NavBar from "../../PageTools/NavBar/NavBar";
import Title from "../../PageTools/Title/Title";
import ResumeSectionTitle from "../../PageTools/ResumeSectionTitle/ResumeSectionTitle";

import styles from "./Resume.module.css";


const Resume = () => {
  return (
    <div className={styles.Resume}>
      <NavBar />
      <div className={styles.Content}>
        <div className={styles.TitleContainer}>
          <Title title="Resume" />
        </div>
        <div className={`${styles.HeavyContent} ${styles.HeavyContent}`}>
          <div className={styles.SummaryContainer}>
            <ResumeSectionTitle title="Summary" h={3} />
            <p>
              Results-oriented Junior Software Engineer with a unique blend of
              technical and financial acumen, excelling in fast-paced
              environments to deliver scalable and efficient software solutions.
              Recognized for driving key technical projects and achieving,
              maintaining, and exceeding results.
            </p>
          </div>
          <div className={styles.ProfessionalExperienceContainer}>
            <ResumeSectionTitle title="Experience" h={3} />
          </div>
          <div className={styles.VolunteerWorkContainer}>
            <ResumeSectionTitle title="Volunteer Work" h={3} />
          </div>
        </div>
        <div className={`${styles.LightContent} ${styles.LightContent}`}>
          <div className={styles.TechnicalSkillsContainer}>
            <ResumeSectionTitle title="Technical Skills" h={3} />
          </div>
          <div className={styles.EducationContainer}>
            <ResumeSectionTitle title="Education" h={3} />
          </div>
          <div className={styles.InterestsContainer}>
            <ResumeSectionTitle title="Interests" h={3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

import React from "react";

import NavBar from "../../PageTools/NavBar/NavBar";
import Title from "../../PageTools/Title/Title";
import ContentBlock from "../../ContentTools/ContentBlock/ContentBlock";
import professionalExperiences from "../../../assets/professionalExperiences.json";
import projects from "../../../assets/projects.json";
import volunteerWork from "../../../assets/volunteerWork.json";
import summaryData from "../../../assets/summary.json";

import BrushCircle from "../../PageTools/BrushCircle/BrushCircle";

import styles from "./Resume.module.css";

const Resume = () => {
  return (
    <div className={styles.Resume}>
      <NavBar />
      <div className={styles.Content}>
        <BrushCircle />
        <div className={styles.TitleContainer}>
          <Title title="Resume" />
        </div>
        <div className={styles.SummaryContainer}>
          <Title title="Summary" h={2} />
          <p>{summaryData[0]?.summary}</p>
        </div>
        <div className={styles.ResumeContent}>
          <div className={`${styles.HeavyContent} ${styles.HeavyContent}`}>
            <div className={styles.ProfessionalExperienceContainer}>
              <Title title="Experience" h={3} />
              {professionalExperiences.map((experience, index) => (
                <div className={`${styles.ContentBlockGap}`} key={index}>
                  <ContentBlock experience={experience} />
                </div>
              ))}
            </div>
            <div className={styles.ProjectsContainer}>
              <Title title="Projects" h={3} />
              {projects.map((project, index) => (
                <div className={`${styles.ContentBlockGap}`} key={index}>
                  <ContentBlock experience={project} />
                </div>
              ))}
            </div>
            <div className={styles.VolunteerWorkContainer}>
              <Title title="Volunteer Work" h={3} />
              {volunteerWork.map((experience, index) => (
                <div className={`${styles.ContentBlockGap}`} key={index}>
                  <ContentBlock experience={experience} />
                </div>
              ))}
            </div>
          </div>
          <div className={`${styles.LightContent} ${styles.LightContent}`}>
            <div className={styles.TechnicalSkillsContainer}>
              <Title title="Technical Skills" h={3} />
              <p>Languages:</p>
              <ul>
                <li>Python</li>
                <li>JavaScript</li>
                <li>C++</li>
                <li>HTML 5</li>
                <li>CSS 3</li>
                <li>JSX</li>
              </ul>

              <p>Technologies:</p>
              <ul>
                <li>React</li>
                <li>REST API</li>
                <li>Firebase</li>
                <li>Bash</li>
                <li>PowerShell</li>
                <li>Microsoft Office 365</li>
              </ul>

              <p>Operating Systems:</p>
              <ul>
                <li>Windows</li>
                <li>Linux</li>
              </ul>

              <p>Skills:</p>
              <ul>
                <li>Data Science</li>
                <li>Machine Learning</li>
                <li>Agile</li>
                <li>Leadership</li>
                <li>Communication</li>
                <li>End-User-Support</li>
              </ul>
            </div>
            <div className={styles.EducationContainer}>
              <Title title="Education" h={3} />
              <p>Santa Clara University</p>
              <ul>
                <li>
                  Bachelor of Science, Computer Science, Mathematics Minor
                </li>
                <li>Bachelor of Science, Finance</li>
              </ul>
            </div>
            <div className={styles.InterestsContainer}>
              <Title title="Interests" h={3} />
              <ul>
                <li>Surfing</li>
                <li>Real Madrid</li>
                <li>Self-Improvement Reading</li>
                <li>Fiction Reading</li>
                <li>Podcast: How I Built This</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

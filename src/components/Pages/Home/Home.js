import React from "react";

import NavBar from "../../PageTools/NavBar/NavBar";
import headShot from "../../../assets/images/Esteban.jpg";
import BrushCircle from "../../PageTools/BrushCircle/BrushCircle";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.Home}>
      <NavBar />
      <div className={styles.Content}>
        <BrushCircle />
        <div className={styles.headShotContainer}>
          <img src={headShot} alt="A Handsome Individual Named Esteban" />
        </div>
        <div className={styles.MainTitleContainer}>
          <h1>Hi, My Name is Esteban!</h1>
        </div>
        <div className={styles.MoreTextContainer}>
          <h2>Innovation, Service, Growth: The Principles of My Code.</h2>
          <p>
            I am a full-stack software engineer focused on product development
            and solutions. Drawing from my values of curiosity, connection,
            honesty, responsibility, and communication my mission is to
            continuously grow and adapt in order to build software that not only
            aligns with my interests, but also serves others and makes a
            meaningful impact on the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

/* 

Brand Statements: I use my technical expertise and passion for writing code to solve important customer 
problems that help small business owners to create functional websites, servers and databases that exceed 
customer expectations

I leverage my knowledge of company products and solutions and expertise in online technology to facilitate
customer inquires. The ability to solve problems for individuals comes naturally for me and helps me meet 
customer expectations

*/
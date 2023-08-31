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
          <h1>Hola, Me Llamo Esteban!</h1>
        </div>
        <div className={styles.MoreTextContainer}>
          <h2>I Believe In Doing Work That Matters.</h2>
          <p>
            My Projects Are About<br></br>Ease-Of-Use And Value
          </p>
        </div>
        <div className={styles.HireMeContainer}>
          <h3>Hire me</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;

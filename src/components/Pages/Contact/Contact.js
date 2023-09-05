import React from "react";

import NavBar from "../../PageTools/NavBar/NavBar";
import ContactBlock from "../../ContentTools/ContactBlock/ContactBlock";
import headShot from "../../../assets/images/Esteban2.jpg";
import BrushCircle from "../../PageTools/BrushCircle/BrushCircle";
import Title from "../../PageTools/Title/Title";

import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <NavBar />
      <div className={styles.Content}>
        <BrushCircle />
        <div className={styles.TitleContainer}>
          <Title title="Contact" />
        </div>
        <div className={styles.headShotContainer}>
          <img src={headShot} alt="A Handsome Individual Named Esteban" />
        </div>
        <div className={styles.ContactInformationContainer}>
          <ContactBlock />
        </div>
      </div>
    </div>
  );
};

export default Contact;

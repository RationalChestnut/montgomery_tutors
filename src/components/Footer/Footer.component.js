import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContentContainer}>
        <p className={styles.footerContent}>919-951-9136</p>
        <p className={styles.footerContent}>brian.kw.mason@gmail.com</p>
      </div>
      <p className={styles.copyright}>© 2022 MocoTutors</p>
    </div>
  );
};

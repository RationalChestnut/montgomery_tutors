import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContentContainer}>
        <p className={styles.footerContent}>Call: 919-951-9136</p>
        <p className={styles.footerContent}>Email: brian.kw.mason@gmail.com</p>
      </div>
      <p className={styles.copyright}>© 2022 SmartyPantsTutoring</p>
    </div>
  );
};

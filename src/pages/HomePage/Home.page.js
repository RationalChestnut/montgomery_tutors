import React from "react";
import styles from "./Home.module.css";

import pink from "../../assets/pink.jpg";
import white from "../../assets/white.jpeg";
import blue from "../../assets/blue.png";
import yellow from "../../assets/yellow.jpg";

export const Home = () => {
  return (
    <div className={styles.homePageContainer} id="home">
      <div className={styles.left}>
        <h2 className={styles.satisfaction}>100% SATISFACTION GUARANTEE</h2>
        <h1 className={styles.title}>
          Get Quality <span>Instruction</span> Through 1-on-1 {""}
          <span>Peer Tutoring</span>
        </h1>
        <p className={styles.description}>
          Private 1-on-1 lessons with a vetted high school student in any
          subject or sport
        </p>
        <div className={styles.buttonContainer}>
          <a href="#enroll">
            <button className={styles.button}>Schedule a Session</button>
          </a>
          <a
            href="https://forms.gle/t6vffGqsXt559Jce6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={`${styles.button} ${styles.blue}`}>
              Join our Team
            </button>
          </a>
        </div>
      </div>
      <div className={styles.right}>
        <div className={`${styles.dot} ${styles.blueDot}`}></div>
        <div className={`${styles.dot} ${styles.yellowDot}`}></div>
        <div className={`${styles.dot} ${styles.smallPinkLeft}`}></div>
        <div className={`${styles.dot} ${styles.smallPinkRight}`}></div>
        <img
          className={styles.image}
          src={pink}
          alt="Girl graduating"
          id={styles.firstImage}
        />
        <img className={styles.image} src={white} alt="Boy graduating" />
        <img className={styles.image} src={blue} alt="Boy graduating" />
        <img
          className={styles.image}
          src={yellow}
          alt="Girl graduating"
          id={styles.lastImage}
        />
      </div>
    </div>
  );
};

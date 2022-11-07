import React from "react";
import styles from "./Card.module.css";
import { GiGraduateCap } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";

export const Card = ({ card }) => {
  return (
    <div className={styles.cardContainer}>
      {card.icon === "GiGraduateCap" ? (
        <GiGraduateCap
          className={styles.cardIcon}
          style={{
            backgroundColor: card.color,
            boxShadow: `0 0px 10px ${card.color}`,
          }}
        />
      ) : card.icon === "FaHandsHelping" ? (
        <FaHandsHelping
          className={styles.cardIcon}
          style={{
            backgroundColor: card.color,
            boxShadow: `0 0 10px ${card.color}`,
          }}
        />
      ) : card.icon === "FaBook" ? (
        <FaBook
          className={styles.cardIcon}
          style={{
            backgroundColor: card.color,
            boxShadow: `0 0 10px ${card.color}`,
          }}
        />
      ) : (
        <AiFillClockCircle
          className={styles.cardIcon}
          style={{
            backgroundColor: card.color,
            boxShadow: `0 0 10px ${card.color}`,
          }}
        />
      )}
      <h2 className={styles.cardTitle}>{card.title}</h2>
      <p className={styles.cardDescription}>{card.description}</p>
    </div>
  );
};

import styles from "./Member.module.css";

import React from "react";

export const Member = ({ member }) => {
  return (
    <div className={styles.memberContainer}>
      <div className={styles.tagContainer}>
        <p
          className={styles.tag}
          style={{
            backgroundColor:
              member.role === "Founder"
                ? "#EECB61"
                : member.role === "Instructor"
                ? "#1AC9E7"
                : "#FFC107",
          }}
        >
          {member.role}
        </p>
      </div>
      <img
        className={styles.memberImage}
        src={member.image}
        alt={member.name}
      />
      <h3 className={styles.name}>{member.name}</h3>
    </div>
  );
};

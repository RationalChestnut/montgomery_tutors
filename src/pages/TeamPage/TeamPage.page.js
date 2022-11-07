import styles from "./TeamPage.module.css";
import React from "react";
import { Member } from "../../components/Member/Member.component";
import { listOfMembers } from "../../data/members.data";
export const Team = () => {
  return (
    <div className={styles.teamPageContainer} id="team">
      <h1 className={styles.title}>Meet the Team</h1>
      <div className={styles.teamContainer}>
        {listOfMembers.map((member, index) => (
          <Member member={member} key={member.name + index} />
        ))}
      </div>
    </div>
  );
};

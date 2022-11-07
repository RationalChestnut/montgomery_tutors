import React from "react";
import styles from "./Enroll.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export const Enroll = () => {
  return (
    <div className={styles.contactPageContainer} id="contact">
      <div className={styles.customShapeDividerTop}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles.shapeFill}
          ></path>
        </svg>
      </div>
      <h1 className={styles.contactTitle}>Enroll</h1>
      <p className={styles.contactSubDescription}>
        Want to enroll in our tutoring program? Fill out the form below and
        we'll get back to you shortly!
      </p>
      <div className={styles.contactFormContainer}>
        <div className={styles.contactInfo}>
          <h2 className={styles.contactInformationTitle}>Enrollment Form</h2>
          <p className={styles.formDescription}>
            Fill out the form and our team will get back to you within 24 hours
          </p>
          <div className={styles.contactMethod}>
            <BsFillTelephoneFill className={styles.icon} />
            <p>919-951-9136</p>
          </div>
          <div className={styles.contactMethod}>
            <MdEmail className={styles.icon} />
            <p>brian.kw.mason@gmail.com</p>
          </div>
        </div>
        <div className={styles.formContainer}>
          <form
            className={styles.form}
            action="https://getform.io/f/3a6bc0a8-56c4-4b3a-8feb-2c62f47feb55"
            method="POST"
          >
            <div className={styles.formSection}>
              <p className={styles.label}>Parent Name</p>
              <input
                type="text"
                name="parent_name"
                className={styles.textInput}
                placeholder="Name"
                required
              />
            </div>
            <div className={styles.formSection}>
              <p className={styles.label}>Parent Email</p>
              <input
                type="text"
                name="parent_email"
                className={styles.textInput}
                placeholder="Email"
                required
              />
            </div>
            <div className={styles.formSection}>
              <p className={styles.label}>Student Name</p>
              <input
                type="text"
                name="student_name"
                className={styles.textInput}
                placeholder="Student Name"
                required
              />
            </div>
            <div className={styles.formSection}>
              <p className={styles.label}>Student Grade</p>
              <input
                type="text"
                name="student_grade"
                className={styles.textInput}
                placeholder="Student Grade"
                required
              />
            </div>
            <div className={styles.formSection}>
              <p className={styles.label}>Lesson Frequency</p>
              <select required className={styles.select}>
                <option value="spontaneous">Spontaneous Lessons</option>
                <option value="1">1x per week</option>
                <option value="2">2x per week</option>
                <option value="3">3x per week</option>
                <option value="4">4x per week</option>
              </select>
            </div>
            <div className={styles.formSection}>
              <p className={styles.label}>Subject[s]</p>
              <input
                type="text"
                name="student_grade"
                className={styles.textInput}
                placeholder="Ex. Algebra II, AP Physics, etc."
                required
              />
            </div>
            <div className={styles.formSection}>
              <p className={styles.label}>Location</p>
              <select required className={styles.select}>
                <option value="online">Online</option>
                <option value="in_person">In person</option>
              </select>
            </div>
            <div className={styles.formSection}>
              <p className={styles.label}>Additional Information</p>
              <textarea
                className={`${styles.textInput} ${styles.textarea}`}
                placeholder="Additional Information"
                name="additional_information"
              ></textarea>
            </div>
            <div className={styles.formSection}>
              <button
                type="text"
                className={styles.submitButton}
                placeholder="Email"
                required
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

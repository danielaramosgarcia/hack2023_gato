import React from "react";
import styles from "./styles.module.css";
import calendar from "../../../../assets/calendar.png";

function MiProgreso() {
  return (
    <div className={styles.container}>
      <img src={calendar} alt='calendar' />
    </div>
  );
}

export default MiProgreso;

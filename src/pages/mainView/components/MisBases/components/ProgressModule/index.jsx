import React from "react";
import styles from "./styles.module.css";
import ProgressBar from "../../../../../../components/ProgressBar";
function ProgressModule({ image, title, progress }) {
  return (
    <div className={styles.container}>
      <div className={styles.iconTitle}>
        <img src={image} alt='image' />
        <h6>{title}</h6>
      </div>
      <div className={styles.barContainer}>
        <ProgressBar progress={progress} />
      </div>
    </div>
  );
}

export default ProgressModule;

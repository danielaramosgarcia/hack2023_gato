import React from "react";
import styles from "./styles.module.css";
function ProgressBar({ progress }) {
  return (
    <div className={styles.container}>
      <div
        className={styles.progress}
        style={{ width: (progress + "%").toString() }}
      />
      <div className={styles.flexEnd}>
        <p>{progress + "%"}</p>
      </div>
    </div>
  );
}

export default ProgressBar;

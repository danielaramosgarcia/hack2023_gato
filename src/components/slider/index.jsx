import React, { useState } from "react";
import styles from "./styles.module.css";
function Slider({ index, setIndex }) {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.options} ${0 === index ? styles.active : ""}`}
        onClick={() => setIndex(0)}
      >
        Manual
      </div>
      <div
        className={`${styles.options} ${1 === index ? styles.active : ""}`}
        onClick={() => setIndex(1)}
      >
        Archivo
      </div>
    </div>
  );
}

export default Slider;

import React from "react";
import styles from "./styles.module.css";
import ProgressBar from "../../../../../../components/ProgressBar";
import { Link } from "react-router-dom";
function ProgressModule({ image, title, progress }) {
  return (
    <Link to={"/lesson"} style={{ textDecoration: "none" }}>
      <div className={styles.container}>
        <div className={styles.iconTitle}>
          <img src={image} alt='image' />
          <h6>{title}</h6>
        </div>
        <div className={styles.barContainer}>
          <ProgressBar progress={progress} />
        </div>
      </div>
    </Link>
  );
}

export default ProgressModule;

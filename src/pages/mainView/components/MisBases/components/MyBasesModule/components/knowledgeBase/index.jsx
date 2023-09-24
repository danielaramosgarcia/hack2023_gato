import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
function KnowledgeBase({ title, description, picture }) {
  return (
    <Link to={"/lesson"} className={styles.container}>
      <div className={styles.upperhalf} style={{ backgroundColor: picture }} />
      <div className={styles.divider}>
        <div className={styles.avatar}>{title[0]}</div>
      </div>
      <div className={styles.lowerhalf}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default KnowledgeBase;

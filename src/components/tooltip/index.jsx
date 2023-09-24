import React from "react";
import styles from "./styles.module.css";

function Tooltip({ children, text }) {
  return (
    <div className={styles.container}>
      <p>{text}</p>
      {children}
    </div>
  );
}

export default Tooltip;

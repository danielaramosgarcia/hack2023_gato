import React from "react";
import styles from "./styles.module.css";
import gatito from "../../assets/gatito.png";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <img src={gatito} alt='logo' className={styles.image} />
        <h1>Learn.ai</h1>
      </div>
      <div className={styles.row}>
        <h3>23/09/23</h3>
        <div className={styles.avatar}>
          <h1>D</h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

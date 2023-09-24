import React from "react";
import styles from "./styles.module.css";
import gatito from "../../assets/gatito.png";

function NewAccountView() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.row}>
          <img src={gatito} alt='logo' className={styles.image} />
          <div className={styles.chat}>
            <p>hola mundo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewAccountView;

import React from "react";
import styles from "./styles.module.css";
import gatito from "../../assets/gatito.png";
import piquito from "../../assets/svg/piquito.svg";

function NewAccountView() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.row}>
          <img src={gatito} alt='logo' className={styles.image} />

          <div className={styles.chat}>
            <img src={piquito} alt='piquito' className={styles.piquito} />
            <p>Hola soy el professor Ronromeo, vamos a aprender juntos!</p>
          </div>
        </div>
        <div className={styles.row}>
          <h3>Me podrías decir tu nombre?</h3>
          <input type='text' />
        </div>
      </div>
    </div>
  );
}

export default NewAccountView;

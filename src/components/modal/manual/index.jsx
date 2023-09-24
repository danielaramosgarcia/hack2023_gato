import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
function Manual() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.titulo}>
          <h3>Titulo</h3>
          <input type='text' />
        </div>
        <div className={styles.base}>
          <h3>Base</h3>
          <input type='text' />
        </div>
      </div>
      <div className='row'>
        <div className='description'>
          <h3>Descripción</h3>
          <textarea name='desc' id='desc' cols='30' rows='10' />
        </div>
      </div>
      <div className={styles.buttonRow}>
        <Link className={styles.buttonLink} to={"/lesson"}>
          Continuar
        </Link>
      </div>
    </div>
  );
}

export default Manual;

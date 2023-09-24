import React from 'react';
import styles from "./styles.module.css";

function CirculoComponent({ imageSource }) {
  return (
    <div className={`${styles.circuloContainer}`}>
      <div className={`${styles.circuloSesion} ${styles.circulo1Sesion}`}></div>
      <div className={`${styles.circuloSesion} ${styles.circulo2Sesion}`}></div>
      <div className={`${styles.circuloSesion} ${styles.circulo3Sesion}`}></div>
      <img className={styles.imageSesion} src={imageSource} alt="Image Alt Text" />
    </div>
  );
}

export default CirculoComponent;
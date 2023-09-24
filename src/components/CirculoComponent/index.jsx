import React from 'react';
import styles from "./styles.module.css";
import { Link } from 'react-router-dom';

function CirculoComponent({ imageSource,text,link }) {
  return (
    <Link to={link} className={`${styles.circuloContainer}`}>
      {text && <p className={styles.text}>{text}</p>}
      <div className={`${styles.circuloSesion} ${styles.circulo1Sesion}`}></div>
      <div className={`${styles.circuloSesion} ${styles.circulo2Sesion}`}></div>
      <div className={`${styles.circuloSesion} ${styles.circulo3Sesion}`}></div>
      <img className={styles.imageSesion} src={imageSource} alt="Image Alt Text" />
    </Link>
  );
}

export default CirculoComponent;
import Navbar from "../../components/navbar";
import React from "react";
import styles from "./styles.module.css";
import gatito from "../../assets/gatito.png";
import piquito from "../../assets/svg/piquito.svg";


function Sesion() {
    return (
        <>
        <Navbar/>
        <div className={styles.container}>
        <div className={styles.main}>
        <div className={styles.row}>
          <img src={gatito} alt='logo' className={styles.image} />

          <div className={styles.chat}>
            <img src={piquito} alt='piquito' className={styles.piquito} />
            <p>Hola esta es la sesion de Algebra, comencemos!</p>
          </div>
        </div>
            </div>
            </div>
            </>
    );
  }
  
  export default Sesion;
  
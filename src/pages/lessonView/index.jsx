import React from "react";
import styles from "./styles.module.css";
import { TiArrowBack } from "react-icons/ti";
import mate from "../../assets/mat.jpg";


function LessonView() {
  return(
<div class={styles.body}>
    <div class={styles.header}> 
      <button className={styles.botonBack} >
      <TiArrowBack style={{color:"white" }}/>
      </button>
      <div class={styles.containerTitulo}>
        <p >Algebra 1</p>
        {/* ahi debe de ir la sesion que se seleccione */}
      </div>
      <button className={styles.botonBack} >
      <TiArrowBack style={{color:"white" }}/>
      </button>
    </div>
    <div class={styles.containerRoad}>
    <div className={`${styles.circuloContainer}`}>
      <div className={`${styles.circuloSesion} ${styles.circulo1Sesion}`}></div>
      <div className={`${styles.circuloSesion} ${styles.circulo2Sesion}`}></div>
      <div className={`${styles.circuloSesion} ${styles.circulo3Sesion}`}></div>
      <img className={styles.imageSesion} src={mate} />
    </div>  
    {/* <img src={calle} alt='logo' className={styles.road} /> */}
    </div>
    <div>

    </div>
    </div>
  );
}

export default LessonView;

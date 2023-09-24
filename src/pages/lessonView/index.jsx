import React from "react";
import styles from "./styles.module.css";
import { TiArrowBack } from "react-icons/ti";
import mate from "../../assets/mat.jpg";
import calle from "../../assets/calle.jpg";
import CirculoComponent from "../../components/navbar/CirculoComponent";

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
    <CirculoComponent imageSource={mate} /> {/* Change the image source as needed */} 
    <CirculoComponent imageSource={mate} /> {/* Change the image source as needed */}
    <CirculoComponent imageSource={mate} /> {/* Change the image source as needed */}
    <CirculoComponent imageSource={mate} /> {/* Change the image source as needed */}
    </div>
    <div>

    </div>
    </div>
  );
}

export default LessonView;

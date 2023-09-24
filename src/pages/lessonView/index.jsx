import React from "react";
import styles from "./styles.module.css";
import { TiArrowBack } from "react-icons/ti";
import mate from "../../assets/mat.jpg";
import calle from "../../assets/calle.jpg";
import CirculoComponent from "../../components/navbar/CirculoComponent";

function LessonView() {
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <button className={styles.botonBack}>
          <TiArrowBack style={{ color: "white", width: "100%", height: "100%" }} />
        </button>
        <div className={styles.containerTitulo}>
          <p>Algebra 1</p>
          {/* ahi debe de ir la sesion que se seleccione */}
        </div>
        <button className={styles.botonBack}>
          <TiArrowBack style={{ color: "white", width: "100%", height: "100%" }} />
        </button>
      </div>
      <div className={styles.containerRoad}>
        <CirculoComponent imageSource={mate} text="Circle 1" /> {/* Change the image source as needed */}
        <CirculoComponent imageSource={mate} text="Circle 2" /> {/* Change the image source as needed */}
        <CirculoComponent imageSource={mate} text="Circle 3" /> {/* Change the image source as needed */}
        <CirculoComponent imageSource={mate} text="Circle 4" /> {/* Change the image source as needed */}
      </div>
      <div>
        <div className={styles.progress}></div>
      </div>
    </div>
  );
}

export default LessonView;

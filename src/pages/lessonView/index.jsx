import React from "react";
import styles from "./styles.module.css";
import { TiArrowBack } from "react-icons/ti";
import mate from "../../assets/mat.jpg";
import calle from "../../assets/calle.jpg";
import CirculoComponent from "../../components/CirculoComponent";
import { Link } from "react-router-dom";
import ProgressModule from "../../components/ProgressBar/index";
import gatito from "../../assets/gatito.png";

function LessonView() {
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <Link to="/" className={styles.botonBack}>
          <TiArrowBack style={{ color: "white", width: "100%", height: "100%" }} />
        </Link>
        <div className={styles.containerTitulo}>
          <p>Algebra 1</p>
          {/* ahi debe de ir la sesion que se seleccione */}
        </div>
        <Link to="/" className={styles.botonBack}>
          <TiArrowBack style={{ color: "white", width: "100%", height: "100%" }} />
        </Link>
      </div>
      <div className={styles.containerRoad}>
        <CirculoComponent link="/sesion" imageSource={mate} text="Circle 1" /> {/* Change the image source as needed */}
        <CirculoComponent imageSource={mate} text="Circle 2" /> {/* Change the image source as needed */}
        <CirculoComponent imageSource={mate} text="Circle 3" /> {/* Change the image source as needed */}
        <CirculoComponent imageSource={mate} text="Circle 4" /> {/* Change the image source as needed */}
      </div>
      <div style={{padding: '0px 40px'}}>
        <ProgressModule
          progress={70}
        ></ProgressModule>
      </div>
    </div>
  );
}

export default LessonView;

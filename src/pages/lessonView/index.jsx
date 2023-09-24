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
        <Link to='/' className={styles.botonBack}>
          <TiArrowBack
            style={{ color: "white", width: "100%", height: "100%" }}
          />
        </Link>
        <div className={styles.containerTitulo}>
          <h1>Emprendimiento 101</h1>
        </div>
        <Link to='/' className={styles.botonBack} style={{ opacity: 0 }}>
          <TiArrowBack
            style={{ color: "white", width: "100%", height: "100%" }}
          />
        </Link>
      </div>
      <div className={styles.containerRoad}>
        <div className={styles.modules}>
          <CirculoComponent link='/sesion' imageSource={mate} text='Circle 1' />
          <div className={styles.spacer} />
          <CirculoComponent link='/sesion' imageSource={mate} text='Circle 2' />
          <div className={styles.spacer} />
          <CirculoComponent link='/sesion' imageSource={mate} text='Circle 3' />
          <div className={styles.spacer} />
          <CirculoComponent link='/sesion' imageSource={mate} text='Circle 4' />
          <div className={styles.spacer} />
          <CirculoComponent link='/sesion' imageSource={mate} text='Circle 4' />
        </div>
      </div>

      <div style={{ padding: "0px 40px" }}>
        <img className={styles.image} src={gatito} />
        <ProgressModule progress={70} />
      </div>
    </div>
  );
}

export default LessonView;

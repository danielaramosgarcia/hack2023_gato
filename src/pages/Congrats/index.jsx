import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import Navbar from "../../components/navbar";
import gatito from "../../assets/gatito.png";
import piquito from "../../assets/svg/piquito.svg";
import Confettis from "../../components/Confetti";

function Congrats() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Link to='/sesion' className={styles.botonBack}>
          <TiArrowBack
            style={{
              color: "var(--accent-color)",
              width: "100%",
              height: "100%",
            }}
          />
        </Link>
        <div className={styles.paper}>
        <img src={gatito} alt='logo' className={styles.image} />

          <div className={styles.row}>
            {Confettis()}

              <p>Feliciades, terminaste el quiz!</p>
          </div>

          <div className={styles.buttonRow}>
            <Link className={styles.buttonLink} to={"/"}>
              Regresar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}


export default Congrats;

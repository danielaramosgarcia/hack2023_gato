import React from "react";
import styles from "./styles.module.css";
import gatito from "../../../../assets/gatito.png";
import ProgressModule from "./components/ProgressModule";
import MyBasesModule from "./components/MyBasesModule";

function MisBases({ setOpen }) {
  return (
    <div className={styles.container}>
      <div className={styles.recent}>
        <h2>Reciente</h2>
        <ProgressModule
          image={gatito}
          title={"Aritmetica 4 Grado para Jovenes"}
          progress={82}
        />
      </div>
      <div className={styles.recent}>
        <h2>Mis Bases</h2>
        <MyBasesModule setOpen={setOpen} />
      </div>
    </div>
  );
}

export default MisBases;

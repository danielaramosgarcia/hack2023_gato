import React from "react";
import styles from "./styles.module.css";
import gatito from "../../../../assets/gatito.png";
import ProgressModule from "./components/ProgressModule";

function MisBases() {
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
    </div>
  );
}

export default MisBases;

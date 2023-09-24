import React from "react";
import styles from "./styles.module.css";
import { GiAtom } from "react-icons/gi";
import { PiGraph } from "react-icons/pi";
import { BiCoinStack } from "react-icons/bi";
import { IoSend } from "react-icons/io5";

function Descubrir() {
  return (
    <div className={styles.container}>
      <h1>Descubre nuevos retos para tu conocimiento!</h1>
      <div className={styles.row}>
        <div className={styles.moduloSugerencia}>
          <GiAtom className={styles.icon} />
          <div className={styles.text}>
            Créame una lección sobre mecánica cuántica
          </div>
        </div>
        <div className={styles.moduloSugerencia}>
          <PiGraph className={styles.icon} />
          <div className={styles.text}>
            Quiero aprender ciencias computacionales
          </div>
        </div>
        <div className={styles.moduloSugerencia}>
          <BiCoinStack className={styles.icon} />
          <div className={styles.text}>
            Ayudame a saber mas de como cuidar de mi dinero
          </div>
        </div>
      </div>
      <div className={styles.inputRow}>
        <input type='text' />
        <IoSend className={styles.icon} />
      </div>
    </div>
  );
}

export default Descubrir;

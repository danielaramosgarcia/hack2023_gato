import React from "react";
import styles from "./styles.module.css";
import { BiDownload } from "react-icons/bi";
function Archivo() {
  return (
    <div className={styles.container}>
      <BiDownload
        style={{ height: "130px", width: "auto", color: "#3A3A3A" }}
      />
      <h3>Suelta el archivo aqui</h3>
    </div>
  );
}

export default Archivo;

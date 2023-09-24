import React from "react";
import styles from "./styles.module.css";
import { BiDownload } from "react-icons/bi";
import { useState } from "react";

function Archivo() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className={styles.container}>
          <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className={styles.fileInput}
        />
      <BiDownload
        style={{ height: "130px", width: "auto", color: "#3A3A3A" }}
      />
      <h3>Suelta el archivo aqui</h3>
    </div>
  );
}

export default Archivo;

import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import Slider from "../slider";
import Manual from "./manual";
import Archivo from "./Archivo";

function Modal({ setOpen, open }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [component, setComponent] = useState(<Manual />);
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    console.log("click");
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setModalOpen(false);
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        console.log("Este mensaje aparecerá después de 2000 milisegundos");
        setOpen(false);
      }, 6000);
      console.log("false");
    } else {
      console.log("hola");
    }
  }, [open]);

  useEffect(() => {
    if (index === 0) {
      setComponent(<Manual />);
    } else if (index === 1) {
      setComponent(<Archivo />);
    }
  }, [index]);

  return (
    <div className={styles.container} ref={modalRef}>
      <div className={styles.forms}>
        <div className={styles.center}>
          <Slider index={index} setIndex={setIndex} />
        </div>
        {component}
      </div>
    </div>
  );
}

export default Modal;

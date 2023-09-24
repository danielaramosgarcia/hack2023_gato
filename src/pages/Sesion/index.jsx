import Navbar from "../../components/navbar";
import React from "react";
import styles from "./styles.module.css";
import gatito from "../../assets/gatito.png";
import piquito from "../../assets/svg/piquito.svg";
import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

function Sesion() {
  return (
    <>
      <Navbar />
      <Link to='/lesson' className={styles.botonBack}>
        <TiArrowBack
          style={{
            color: "var(--accent-color)",
            width: "100%",
            height: "100%",
          }}
        />
      </Link>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.row}>
            <img src={gatito} alt='logo' className={styles.image} />

            <div className={styles.chat}>
              <img src={piquito} alt='piquito' className={styles.piquito} />
              <p>Aprendamos sobre emprendimiento!</p>
            </div>
          </div>
          <div className={styles.row} style={{ paddingTop: "30px" }}>
            <p>
              Un Viaje Único hacia tus Metas ¡Te doy la más cordial bienvenida a
              este emocionante curso de emprendimiento personalizado! Aquí, en
              este espacio de aprendizaje único, serás el protagonista de tu
              propia historia emprendedora. Este curso está diseñado
              exclusivamente para ti y para llevar tus ideas, pasiones y
              aspiraciones al siguiente nivel. A lo largo de nuestras lecciones,
              exploraremos juntos tus intereses más profundos y tus sueños más
              ambiciosos. Nos sumergiremos en el mundo del emprendimiento, pero
              no de manera abstracta, sino aplicándolo directamente a tu vida y
              tus objetivos personales. Imagina tener la oportunidad de
              identificar oportunidades que resuenen contigo a nivel personal, y
              luego diseñar estrategias específicas para hacer que esas
              oportunidades se vuelvan realidad. Aquí, no existe un enfoque
              único para todos; en su lugar, adaptaremos cada lección y
              actividad según tus necesidades y deseos. Este curso no solo te
              brindará las herramientas y los conocimientos necesarios para
              emprender con éxito, sino que también te animará a explorar tus
              propios intereses y pasiones, y a aplicarlos en el mundo
              empresarial. ¿Tienes una idea que te apasiona? ¿Sueñas con crear
              un negocio que refleje tus valores y metas personales? ¡Este es el
              lugar para hacerlo realidad! Mi objetivo como tu compañero y guía
              en este viaje es proporcionarte el apoyo y la orientación
              necesarios para alcanzar tus objetivos emprendedores. Estoy aquí
              para ayudarte a desarrollar tus habilidades, desafiar tus límites
              y acompañarte en cada paso del camino hacia el éxito. Así que,
              ¿estás listo/a para embarcarte en este viaje emprendedor
              personalizado? ¡Vamos a empezar a construir un futuro empresarial
              que refleje tus sueños y aspiraciones únicas!
            </p>
          </div>
          <div className={styles.buttonRow}>
            <Link className={styles.buttonLink} to={"/quiz"}>
              Continuar
            </Link>
          </div>
        </div>
        {/* <div className={styles.rowEnd}>
          <button className={styles.endButton}>
            <img className={styles.endButtonImg} src={gatito} alt='' />
          </button>
        </div> */}
      </div>
    </>
  );
}

export default Sesion;

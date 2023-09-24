import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import Navbar from "../../components/navbar";
import gatito from "../../assets/gatito.png";
import piquito from "../../assets/svg/piquito.svg";

function Quiz() {
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
          <div className={styles.row}>
            <img src={gatito} alt='logo' className={styles.image} />

            <div className={styles.chat}>
              <img src={piquito} alt='piquito' className={styles.piquito} />
              <p>Pongamos a prueba lo que aprendimos!</p>
            </div>
          </div>
          {questions.map((node, index) => {
            return (
              <div key={index} className={styles.pregunta}>
                <h3>{node.question}</h3>
                {node.options.map((opcion, index) => (
                  <label key={index}>
                    <input
                      type='radio'
                      value={opcion}
                      // checked={respuestaSeleccionada === opcion}
                      // onChange={(e) => setRespuestaSeleccionada(e.target.value)}
                    />
                    {opcion}
                  </label>
                ))}
              </div>
            );
          })}
          <div className={styles.buttonRow}>
            <Link className={styles.buttonLink} to={"/congrats"}>
              Continuar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

const questions = [
  {
    question: "¿Qué implica emprender?",
    options: [
      "Crear un negocio",
      "Generar ganancias",
      "Innovar y perseverar",
      "Contribuir al progreso",
    ],
    correct_option: "Innovar y perseverar",
  },
  {
    question: "¿Qué caracteriza a los emprendedores?",
    options: [
      "Coraje y pasión",
      "Fracasos y desafíos",
      "Visionarios y creativos",
      "Todos los anteriores",
    ],
    correct_option: "Todos los anteriores",
  },
  {
    question: "¿Qué transforman los emprendedores en oportunidades?",
    options: ["Problemas", "Negocios", "Ganancias", "Sociedad"],
    correct_option: "Problemas",
  },
  {
    question: "¿Qué inspira el emprendimiento?",
    options: ["Creatividad", "Colaboración", "Ambición", "Aprendizaje"],
    correct_option: "Creatividad",
  },
  {
    question: "¿Qué impulsa el emprendimiento?",
    options: [
      "Crecimiento económico",
      "Cambios negativos",
      "Comodidad",
      "Conformidad",
    ],
    correct_option: "Crecimiento económico",
  },
  {
    question: "¿Cuál es el objetivo final del emprendimiento?",
    options: [
      "Generar ganancias",
      "Dejar una huella duradera",
      "Contribuir al progreso",
      "Aportar al mundo",
    ],
    correct_option: "Dejar una huella duradera",
  },
  {
    question: "¿Qué es necesario para emprender?",
    options: ["Pasión", "Dedicación", "Resiliencia", "Todos los anteriores"],
    correct_option: "Todos los anteriores",
  },
  {
    question: "¿Qué significa emprender?",
    options: [
      "Arriesgarse",
      "Conformarse",
      "Mantenerse igual",
      "Seguir instrucciones",
    ],
    correct_option: "Arriesgarse",
  },
  {
    question: "¿Qué construyen los emprendedores?",
    options: ["Problemas", "Soluciones", "Empresas", "Oportunidades"],
    correct_option: "Soluciones",
  },
  {
    question: "¿Qué impacta en la sociedad?",
    options: [
      "Empezar un negocio",
      "Aprender constantemente",
      "Construir soluciones",
      "Todos los anteriores",
    ],
    correct_option: "Todos los anteriores",
  },
];

export default Quiz;

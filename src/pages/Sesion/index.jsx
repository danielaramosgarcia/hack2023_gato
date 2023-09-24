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
        <Navbar/>
        <Link to="/lesson" className={styles.botonBack}>
          <TiArrowBack style={{ color: 'var(--accent-color)', width: "100%", height: "100%" }} />
        </Link>
        <div className={styles.container}>
        <div className={styles.main}>
        <div className={styles.row}>
          <img src={gatito} alt='logo' className={styles.image} />

          <div className={styles.chat}>
            <img src={piquito} alt='piquito' className={styles.piquito} />
            <p>Hola esta es la sesion de Algebra, comencemos!</p>
          </div>
        </div>
        <div className={styles.row} style={{paddingTop:"30px"}}>
            <p>La Importancia de la Aritmética en la Vida Cotidiana:

              La aritmética, una rama fundamental de las matemáticas, es mucho más que una simple disciplina académica. Aunque a menudo se asocia con ecuaciones y fórmulas en un entorno escolar, la aritmética desempeña un papel crucial en la vida cotidiana de todas las personas. Desde administrar un presupuesto hasta calcular tiempos y distancias, la aritmética es una herramienta esencial que nos permite tomar decisiones informadas y resolver una variedad de problemas cotidianos.

              Una de las aplicaciones más evidentes de la aritmética es en las finanzas personales. Cada día, las personas toman decisiones financieras que involucran cálculos aritméticos, como el presupuesto mensual, la planificación de ahorros y la evaluación de préstamos. El entendimiento de conceptos como porcentajes, interés compuesto y tasas de cambio es esencial para tomar decisiones financieras informadas y evitar problemas de deuda.

              Además, la aritmética es esencial en la gestión del tiempo y la programación de actividades. Ya sea para calcular la hora de llegada a un destino, determinar cuánto tiempo llevará realizar una tarea o programar un cronograma de trabajo, las operaciones aritméticas como la suma, la resta y la multiplicación se utilizan constantemente. La capacidad de estimar y realizar cálculos precisos es fundamental para la organización eficiente de nuestras vidas.

              Además, la aritmética es esencial en la gestión del tiempo y la programación de actividades. Ya sea para calcular la hora de llegada a un destino, determinar cuánto tiempo llevará realizar una tarea o programar un cronograma de trabajo, las operaciones aritméticas como la suma, la resta y la multiplicación se utilizan constantemente. La capacidad de estimar y realizar cálculos precisos es fundamental para la organización eficiente de nuestras vidas.

              La aritmética, una rama fundamental de las matemáticas, es mucho más que una simple disciplina académica. Aunque a menudo se asocia con ecuaciones y fórmulas en un entorno escolar, la aritmética desempeña un papel crucial en la vida cotidiana de todas las personas. Desde administrar un presupuesto hasta calcular tiempos y distancias, la aritmética es una herramienta esencial que nos permite tomar decisiones informadas y resolver una variedad de problemas cotidianos.

              Una de las aplicaciones más evidentes de la aritmética es en las finanzas personales. Cada día, las personas toman decisiones financieras que involucran cálculos aritméticos, como el presupuesto mensual, la planificación de ahorros y la evaluación de préstamos. El entendimiento de conceptos como porcentajes, interés compuesto y tasas de cambio es esencial para tomar decisiones financieras informadas y evitar problemas de deuda.

              Además, la aritmética es esencial en la gestión del tiempo y la programación de actividades. Ya sea para calcular la hora de llegada a un destino, determinar cuánto tiempo llevará realizar una tarea o programar un cronograma de trabajo, las operaciones aritméticas como la suma, la resta y la multiplicación se utilizan constantemente. La capacidad de estimar y realizar cálculos precisos es fundamental para la organización eficiente de nuestras vidas.

              En el ámbito de las compras y el consumo, la aritmética también juega un papel vital. Calcular descuentos, tasas de impuestos y comparar precios en el supermercado son ejemplos comunes de situaciones en las que se aplican conceptos aritméticos. La aritmética nos ayuda a tomar decisiones económicas informadas y a evitar gastar en exceso.

              En resumen, la aritmética es una habilidad esencial que trasciende las aulas de matemáticas. Impacta en prácticamente</p>
        </div>
        <div className={styles.buttonRow}>
          <Link className={styles.buttonLink} to={"/lesson"}>
            Continuar
          </Link>
        </div>
            </div>
          <div className={styles.rowEnd}>
            <button className={styles.endButton}>
              <img className={styles.endButtonImg} src={gatito} alt="" />
            </button>
            
          </div>

            </div>
            </>
    );
  }
  
  export default Sesion;
  
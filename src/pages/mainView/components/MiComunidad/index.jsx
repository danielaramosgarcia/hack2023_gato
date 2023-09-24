import styles from "./styles.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import KnowledgeBase from "../../../../components/knowledgeBase";
function MiComunidad() {
  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <input type='text' placeholder='Explorar bases de la comunidad...' />
        <AiOutlineSearch
          style={{ marginLeft: "-35px", height: "24px", width: "auto" }}
        />
      </div>
      <div className={styles.bases}>
        <h1>Finanzas</h1>
        <div className={styles.baseContainer}>
          {knowledgeBasesFinanzas.map((kb, index) => {
            return (
              <KnowledgeBase
                key={index}
                title={kb.title}
                description={kb.description}
                picture={kb.picture}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.bases}>
        <h1>Programación</h1>
        <div className={styles.baseContainer}>
          {programmingTopics.map((kb, index) => {
            return (
              <KnowledgeBase
                key={index}
                title={kb.title}
                description={kb.description}
                picture={kb.picture}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.bases}>
        <h1>Histora Mexicana</h1>
        <div className={styles.baseContainer}>
          {mexicanHistoryTopics.map((kb, index) => {
            return (
              <KnowledgeBase
                key={index}
                title={kb.title}
                description={kb.description}
                picture={kb.picture}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

const knowledgeBasesFinanzas = [
  {
    index: 0,
    title: "Gestión de Presupuesto",
    description:
      "La gestión de presupuesto es una habilidad esencial en finanzas personales y empresariales. Implica planificar, seguir y ajustar un presupuesto para asegurarse de que los ingresos y gastos estén equilibrados y se puedan alcanzar los objetivos financieros.",
    picture: "#f06292", // Color rosa
  },
  {
    index: 1,
    title: "Inversiones",
    description:
      "Las inversiones son una forma de hacer crecer el dinero con el tiempo. Comprender las diferentes opciones de inversión, como acciones, bonos y bienes raíces, es fundamental para tomar decisiones financieras sólidas.",
    picture: "#64b5f6", // Color azul
  },
  {
    index: 2,
    title: "Planificación de Jubilación",
    description:
      "La planificación de jubilación implica asegurarse de tener suficientes recursos financieros para mantener un nivel de vida deseado después de retirarse. Esto puede incluir el uso de cuentas de jubilación y otros instrumentos financieros.",
    picture: "#81c784", // Color verde
  },
  {
    index: 3,
    title: "Gestión de Deudas",
    description:
      "La gestión de deudas se trata de manejar de manera efectiva las deudas, como préstamos estudiantiles, hipotecas y tarjetas de crédito. Estrategias como la consolidación de deudas y la reducción de tasas de interés son importantes en este aspecto.",
    picture: "#ffb74d", // Color naranja
  },
  {
    index: 4,
    title: "Educación Financiera",
    description:
      "La educación financiera es clave para tomar decisiones informadas sobre el dinero. Comprender conceptos como la tasa de interés, la inflación y la diversificación ayuda a mejorar la salud financiera personal y la capacidad de inversión.",
    picture: "#ff8a65", // Color naranja
  },
];

const programmingTopics = [
  {
    index: 0,
    title: "Desarrollo Web Frontend",
    description:
      "El desarrollo web frontend se enfoca en crear la interfaz de usuario de sitios web y aplicaciones. Implica el uso de tecnologías como HTML, CSS y JavaScript para crear experiencias de usuario interactivas y atractivas.",
    picture: "#e57373",
  },
  {
    index: 1,
    title: "Desarrollo Web Backend",
    description:
      "El desarrollo web backend se centra en la lógica detrás de las aplicaciones web. Los desarrolladores backend trabajan con servidores, bases de datos y lenguajes de programación como Python, Ruby y Node.js para garantizar que las aplicaciones funcionen sin problemas.",
    picture: "#81c784",
  },
  {
    index: 2,
    title: "Desarrollo Móvil",
    description:
      "El desarrollo móvil implica la creación de aplicaciones para dispositivos móviles, como teléfonos inteligentes y tabletas. Los desarrolladores móviles pueden trabajar en plataformas como Android (Java/Kotlin) o iOS (Swift/Objective-C).",
    picture: "#64b5f6",
  },
  {
    index: 3,
    title: "Ciencia de Datos",
    description:
      "La ciencia de datos se enfoca en analizar y extraer información útil de grandes conjuntos de datos. Los científicos de datos utilizan lenguajes como Python y herramientas como TensorFlow para crear modelos y tomar decisiones basadas en datos.",
    picture: "#ffb74d",
  },
  {
    index: 4,
    title: "Ciberseguridad",
    description:
      "La ciberseguridad se trata de proteger sistemas y datos contra amenazas cibernéticas. Los expertos en ciberseguridad trabajan en identificar vulnerabilidades y desarrollar estrategias para prevenir ataques informáticos.",
    picture: "#ff8a65",
  },
];

const mexicanHistoryTopics = [
  {
    index: 0,
    title: "La Civilización Maya",
    description:
      "La civilización Maya fue una de las civilizaciones precolombinas más avanzadas de Mesoamérica. Se destacaron en matemáticas, astronomía, arquitectura y escritura jeroglífica. Sus ruinas y legado cultural son fascinantes para los historiadores.",
    picture: "#f06292", // Color rosa
  },
  {
    index: 1,
    title: "La Conquista Española",
    description:
      "La conquista española de México fue un evento histórico que marcó el inicio de la colonización europea en América. Hernán Cortés y sus tropas conquistaron el imperio azteca en 1521, cambiando el curso de la historia mexicana.",
    picture: "#64b5f6", // Color azul
  },
  {
    index: 2,
    title: "La Revolución Mexicana",
    description:
      "La Revolución Mexicana fue un conflicto armado que tuvo lugar entre 1910 y 1920. Buscaba reformar la política y la sociedad mexicana, y tuvo un impacto significativo en la forma en que se gobierna México hoy en día.",
    picture: "#81c784", // Color verde
  },
  {
    index: 3,
    title: "La Cultura Maya y Azteca",
    description:
      "La cultura Maya y Azteca dejó un legado cultural impresionante en México. Sus avances en arquitectura, arte, religión y agricultura siguen siendo objeto de estudio y admiración en la actualidad.",
    picture: "#ff8a65", // Color naranja
  },
  {
    index: 4,
    title: "El Movimiento de Independencia",
    description:
      "El movimiento de independencia de México, liderado por figuras como Miguel Hidalgo y José María Morelos, resultó en la independencia de México de la corona española en 1821. Este evento es fundamental en la historia del país.",
    picture: "#9575cd", // Color morado
  },
];

export default MiComunidad;

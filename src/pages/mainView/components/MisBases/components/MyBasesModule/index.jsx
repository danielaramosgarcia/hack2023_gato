import React from "react";
import styles from "./styles.module.css";
import KnowledgeBase from "../../../../../../components/knowledgeBase";

function MyBasesModule({ setOpen }) {
  return (
    <div className={styles.container}>
      <div className={styles.addKnowledge} onClick={() => setOpen(true)}>
        +
      </div>
      {knowledgeBases.map((kb, index) => {
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
  );
}

export default MyBasesModule;

const knowledgeBases = [
  {
    index: 0,
    title: "Emprendimiento",
    description:
      "El emprendimiento es el proceso de identificar oportunidades y crear un nuevo negocio o proyecto, asumiendo riesgos con el objetivo de obtener ganancias y generar valor en el mercado. Involucra la innovación, la toma de decisiones estratégicas y el esfuerzo para desarrollar y hacer crecer una empresa o iniciativa.",
    picture: "#e57373",
  },
  {
    index: 1,
    title: "Geometría",
    description:
      "La geometría es una rama de las matemáticas que se enfoca en el estudio de las formas, tamaños, propiedades y dimensiones de los objetos y el espacio. Se utiliza para resolver problemas relacionados con áreas, volúmenes, ángulos y distancias. La geometría es esencial en la arquitectura, la ingeniería, la cartografía y la física, entre otros campos.",
    picture: "#81c784",
  },
  {
    index: 2,
    title: "Historia del Arte",
    description:
      "La historia del arte es el estudio de la evolución de las expresiones artísticas a lo largo del tiempo. Examina cómo las formas de arte, como la pintura, la escultura y la arquitectura, han reflejado las culturas y movimientos artísticos a lo largo de la historia. La historia del arte nos permite comprender y apreciar las obras maestras creadas por artistas a lo largo de los siglos.",
    picture: "#64b5f6",
  },
  {
    index: 3,
    title: "Física Clásica",
    description:
      "La física clásica es la rama de la física que se ocupa de los principios fundamentales del movimiento, las fuerzas y la energía en el mundo macroscópico. Fue desarrollada por científicos como Isaac Newton y es la base de la mecánica clásica. La física clásica es fundamental en la comprensión de fenómenos cotidianos.",
    picture: "#ffb74d",
  },
  {
    index: 4,
    title: "Biología Celular",
    description:
      "La biología celular es una disciplina que se enfoca en el estudio de las células, las unidades fundamentales de la vida. Examina su estructura, función y procesos vitales. La biología celular es esencial en la comprensión de la vida en un nivel microscópico y es fundamental en la biología y la medicina.",
    picture: "#ff8a65",
  },
  {
    index: 5,
    title: "Programación Web",
    description:
      "La programación web se refiere a la creación de sitios y aplicaciones web utilizando lenguajes de programación como HTML, CSS y JavaScript. Es fundamental en el desarrollo de sitios web interactivos y dinámicos que son accesibles en línea.",
    picture: "#90a4ae",
  },
  {
    index: 6,
    title: "Historia Mundial",
    description:
      "La historia mundial es el estudio de la historia de la humanidad en su conjunto, abarcando eventos y desarrollos significativos en todo el mundo. Examina culturas, civilizaciones, conflictos y avances a lo largo de los siglos, brindando una visión completa de la historia de la humanidad.",
    picture: "#aed581",
  },
  {
    index: 7,
    title: "Química Orgánica",
    description:
      "La química orgánica es el estudio de los compuestos químicos que contienen carbono, que son fundamentales en la vida y en la industria. Examina la estructura y reactividad de las moléculas orgánicas y es esencial en campos como la farmacología y la química de materiales.",
    picture: "#ffab91",
  },
  {
    index: 8,
    title: "Música Clásica",
    description:
      "La música clásica es un género musical que se caracteriza por su composición formal y estructura. Ha sido creada por compositores famosos como Beethoven y Mozart y es apreciada por su belleza y complejidad. La música clásica es una parte importante de la cultura musical.",
    picture: "#b39ddb",
  },
  {
    index: 9,
    title: "Inteligencia Artificial",
    description:
      "La inteligencia artificial es un campo de la informática que se enfoca en crear sistemas y algoritmos capaces de realizar tareas que requieren inteligencia humana, como el aprendizaje automático y la toma de decisiones. Es una tecnología en crecimiento con aplicaciones en diversas industrias.",
    picture: "#80cbc4",
  },
];

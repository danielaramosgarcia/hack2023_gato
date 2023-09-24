import { useState } from "react";
import styles from "./styles.module.css";

function MvNavbar({ setIndex }) {
  const [menuIndex, setMenuIndex] = useState(0);

  const menuOptions = ["Mis Bases", "Mi Comunidad", "Descubrir", "Mi Progreso"];

  const handleMenuClick = (index) => {
    setMenuIndex(index);
    setIndex(index);
  };

  return (
    <div className={styles.container}>
      {menuOptions.map((option, index) => (
        <div
          key={index}
          className={`${styles.options} ${
            menuIndex === index ? styles.active : ""
          }`}
          onClick={() => handleMenuClick(index)}
        >
          <h4>{option}</h4>
        </div>
      ))}
    </div>
  );
}

export default MvNavbar;

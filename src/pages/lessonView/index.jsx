import React from "react";
import styles from "./styles.module.css";



function LessonView() {
  return(
    <div class={styles.header}> 
    <button className="button-with-image" onClick={onClick}>
    <img src={imageSrc} alt={altText} />
    </button>
    </div>

  );
}

export default LessonView;

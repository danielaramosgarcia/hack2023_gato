import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import pinpoint from "../../assets/svg/pinpoint.svg";
import mat from "../../assets/mat.jpg";
import Tooltip from "../tooltip";

function CirculoComponent({ imageSource, text, link }) {
  return (
    <Tooltip text={text}>
      <Link to={link}>
        <img src={pinpoint} alt='pinpoint' />
        <div className={styles.container}>
          <img src={mat} alt='lesson' />
        </div>
      </Link>
    </Tooltip>
  );
}

export default CirculoComponent;

import React from "react";
import styles from "./imagecard.module.css";

const Card = ({ imageUrl, text }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={text} />
      <div className={styles.cardText}>{text}</div>
    </div>
  );
};

export default Card;

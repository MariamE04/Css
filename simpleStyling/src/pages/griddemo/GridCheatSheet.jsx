import React from "react";
import styles from "./gridcheatsheet.module.css";

const GridCheatSheet = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>1</div>
      <div className={`${styles.item} ${styles.item2}`}>2</div>
      <div className={`${styles.item} ${styles.item3} ${styles.span2}`}> 3 (span 2 columns)</div>
      <div className={`${styles.item} ${styles.item2}`}>4</div>
      <div className={`${styles.item} ${styles.item}`}>5</div>
      <div className={`${styles.item} ${styles.item3} ${styles.span2row}`}> 6 (span 2 rows)</div>
      <div className={`${styles.item} ${styles.item2}`}>7</div>
      <div className={`${styles.item} ${styles.item}`}>8</div>
    </div>
  );
};

export default GridCheatSheet;

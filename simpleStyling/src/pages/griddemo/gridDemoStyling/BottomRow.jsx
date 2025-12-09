import styles from "../grid.module.css";

const BottomRow = ({ children }) => {
  return <div className={styles.bottomRow}>{children}</div>;
};

export default BottomRow;

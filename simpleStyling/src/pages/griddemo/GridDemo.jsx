import styles from "./grid.module.css";

const GridDemo = () => {
  return (
    <div className={styles.container}>
      {/* Top row */}
      <div className={styles.topRow}>
        <div className={styles.topDiv1}>Top Left</div>
        <div className={styles.topDiv2}>Top Right</div>
      </div>

      {/* Bottom row */}
      <div className={styles.bottomRow}>
        <div className={styles.leftMenu}>
          <ul>
            <li>Menu 1</li>
            <li>Menu 2</li>
            <li>Menu 3</li>
          </ul>
        </div>
        <div className={styles.rightContent}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            imperdiet libero id nisi euismod, sed porta est consectetur. Morbi
            sed odio massa.
          </p>
          <p>
            More content here. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec hendrerit vehicula est, in consequat.
          </p>
        </div>
        <div className={styles.footer}>Footer Area</div>
      </div>
    </div>
  );
};

export default GridDemo;

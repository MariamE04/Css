import styles from "./grid.module.css";

import TopRow from "./gridDemoStyling/topRow";
import TopColumn from "./gridDemoStyling/TopColumn";

import BottomRow from "./gridDemoStyling/BottomRow";
import BottomColumn from "./BottomColumn";

import LeftMenu from "./gridDemoStyling/leftMenu";
import RightContent from "./gridDemoStyling/RightContent";
import Footer from "./gridDemoStyling/Footer";

const GridDemo = () => {
  return (
    <div className={styles.container}>

      {/* TOP ROW */}
      <TopRow>
        <TopColumn styleClass={styles.topDiv1}>Top Left</TopColumn>
        <TopColumn styleClass={styles.topDiv2}>Top Right</TopColumn>
      </TopRow>

      {/* BOTTOM ROW */}
      <BottomRow>

        <BottomColumn styleClass={styles.leftMenu}>
          <LeftMenu />
        </BottomColumn>

        <BottomColumn styleClass={styles.rightContent}>
          <RightContent />
        </BottomColumn>

        <BottomColumn styleClass={styles.footer}>
          <Footer />
        </BottomColumn>

      </BottomRow>

    </div>
  );
};

export default GridDemo;

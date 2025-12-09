import styles from "../grid.module.css";

const TopRow = ({ children }) => {
  return <div className={styles.topRow}>{children}</div>;
};

export default TopRow;


// TopRow er et layout-område, der bestemmer grid-strukturen for top-rækken.
// Den modtager children, dvs. ALT hvad MAN putter IMELLEM <TopRow> ... </TopRow>

//Eksempel:
// <TopRow>
//   <TopColumn>Top Left</TopColumn>
//   <TopColumn>Top Right</TopColumn>
// </TopRow>

// Her bliver begge <TopColumn>-komponenter sendt som children til TopRow.

// TopRow styrer KUN layoutet (styling og position).
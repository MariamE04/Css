
const TopColumn = ({ children, styleClass }) => {
  return <div className={styleClass}>{children}</div>;
};

export default TopColumn;


// children = indholdet i kolonnen (tekst, komponenter osv.)
// styleClass = hvilken CSS-stil der skal bruges (fx venstre eller højre kolonne)


//Eksempel fra GridDemo:
// <TopColumn styleClass={styles.topDiv1}>Top Left</TopColumn>

// Det bliver til:
// <div class="topDiv1">Top Left</div>

// Kolonnen styrer altså indhold, ikke layoutet.
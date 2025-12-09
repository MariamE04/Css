import styles from "./flex.module.css";
import ImageCardContainer from "../../components/imagecard/ImageCardContainer.jsx";
const sampleCards = [
  { imageUrl: "https://media.istockphoto.com/id/1322104312/photo/freedom-chains-that-transform-into-birds-charge-concept.jpg?s=612x612&w=0&k=20&c=e2XUx498GotTLJn_62tPmsqj6vU48ZEkf0auXi6Ywh0=", text: "Card 1: Chain breaks and birds fly free" },
  { imageUrl: "https://static.desygner.com/wp-content/uploads/sites/13/2022/05/04141642/Free-Stock-Photos-01.jpg", text: "Card 2: Stupe in a pond" },
  { imageUrl: "https://freenaturestock.com/wp-content/uploads/freenaturestock-2285-768x1152.jpg", text: "Card 3: Tranquil forest" },
  { imageUrl: "https://www.psdstack.com/wp-content/uploads/2019/08/copyright-free-images-750x420.jpg", text: "Card 4: Serene Ocean and abandoned boat" },
];
const FlexDemo = () => {
  return (
    <div className={styles.container}>
      {/* Top two divs */}
        <div className={styles.topRow1}>Top Row</div>
        <div className={styles.topRow2}>Second Row</div>

      {/* Bottom section */}
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
            adipiscing elit.
          </p>
          <ImageCardContainer cards={sampleCards}/>
        </div>
      </div>
    </div>
  );
};

export default FlexDemo;

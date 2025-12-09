import styles from "./imagecontainer.module.css";
import Card from "./ImageCard"; // assuming Card.jsx is in the same folder

const CardContainer = ({ cards }) => {
  return (
    <div className={styles.container}>
      {cards.map((card, index) => (
        <Card key={index} imageUrl={card.imageUrl} text={card.text} />
      ))}
    </div>
  );
};

export default CardContainer;

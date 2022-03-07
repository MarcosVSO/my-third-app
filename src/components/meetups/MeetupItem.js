import styles from "./MeetUpItem.module.css";
import Card from "../ui/Card";

function MeetUpItem(props) {
  return (
    <li key={props.id} className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={props.image} alt="" />
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={styles.actions}>
          <button>To Favorites</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetUpItem;

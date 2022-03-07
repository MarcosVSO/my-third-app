import MeetUpItem from "./MeetupItem";
import styles from "./MeetUpList.module.css";

function MeetUpList(props) {
  return (
    <ul className={styles.list}>
      {props.itemsList.map((listItem) => {
        return (
          <MeetUpItem
            image={listItem.image}
            id={listItem.id}
            description={listItem.description}
            address={listItem.address}
            title={listItem.title}
          />
        );
      })}
    </ul>
  );
}

export default MeetUpList;

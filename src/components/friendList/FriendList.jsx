import styles from "./FriendList.module.css";
import FriendListItem from "../friendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendlist}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;

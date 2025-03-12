import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profiles}>
      <div className={styles.information}>
        <img src={image} alt={name} />
        <p>{name}</p> <p>@{tag}</p> <p>{location}</p>
      </div>
      <ul className={styles.items}>
        <li>
          <span>Followers</span> <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

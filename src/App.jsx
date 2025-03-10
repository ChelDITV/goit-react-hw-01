import Profile from "./component/Profile/Profile";
import "./App.css";
import userData from "./userData.json";
import FriendList from "./component/friendList/FriendList";
import friends from "./friends.json";
import TransactionHistory from "./component/transactionHistory/TransactionHistory";
import transactions from "./transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;

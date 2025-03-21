import "./App.css";
import Profile from "./components/profile/Profile";
import userData from "./userData.json";
import FriendList from "./components/friendList/FriendList";
import friends from "./friends.json";
import TransactionHistory from "./components/transactionHistory/TransactionHistory";
import transactions from "./transactions.json";
import "normalize.css";

const App = () => {
  return (
    <div className="container">
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;

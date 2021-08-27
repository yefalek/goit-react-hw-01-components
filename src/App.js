import user from './Profile/user.json';
import Profile from './Profile/profile';
import statisticalData from './Statistics/statistical-data.json';
import Statistics from './Statistics/statistics';
import friends from './FriendList/friends.json';
import FriendList from './FriendList/friendlist';
import transactions from './TransactionHistory/transactions.json';
import TransactionHistory from './TransactionHistory/transactions';


export default function App() {
  return (
    <div class = "general">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics
        title="Upload stats" stats={statisticalData} />
      {/* <Statistics stats={statisticalData} /> */}

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}


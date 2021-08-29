import user from './components/Profile/user.json';
import Profile from './components/Profile/profile';
import statisticalData from './components/Statistics/statistical-data.json';
import Statistics from './components/Statistics/statistics';
import friends from './components/FriendList/friends.json';
import FriendList from './components/FriendList/friendlist';
import transactions from './components/TransactionHistory/transactions.json';
import TransactionHistory from './components/TransactionHistory/transactions';

export default function App() {
  return (
    <div class="general">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

import user from './Profile/user.json';
import Profile from './Profile/profile';
import statisticalData from './Statistics/statistical-data.json';
import Statistics from './Statistics/statistics';


export default function App() {
  return (
    <div>
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
    </div>
  );
}


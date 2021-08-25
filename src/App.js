import userData from './Profile/user.json';
import Profile from './Profile/user';


export default function App() {
  return (
    <div className="App">
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
}


import userData from './Profile/user.json';
import User from './Profile/user';


function App() {
  return (
    <div className="App">
      <User
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
}

export default App;

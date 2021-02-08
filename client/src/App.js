import { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

const HomePage = () => (
  <>
    <h1>HOME PAGE</h1>
  </>
);

const UsersInfo = () => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    fetch('http://localhost:7000/users/33/users_statistics/33')
      .then(response => response.json())
      .then(user => console.log(user));
  });

  return (
    <h1>USERS INFO</h1>
  );
}

const UserStatistics = () => (
  <>
    <h1>USER STATS</h1>
  </>
);


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/users' component={UsersInfo}></Route>
        <Route path='/users/:id' component={UserStatistics}></Route>
      </Switch>
    </div>
  );
}

export default App;

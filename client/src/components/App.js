import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Login from './Login';
import Home from './Home';
import MakeAPlan from '../pages/MakeAPlan';
import Register from '../pages/Register';
import HelpAFriend from '../pages/HelpAFriend';
import GetSupplies from '../pages/GetSupplies';
import FirstSteps from '../pages/FirstSteps';
import GetInvolved from '../pages/GetInvolved';
import LastSteps from '../pages/LastSteps';
import RaiseYourVote from '../pages/RaiseYourVote';
import EditUserForm from '../pages/EditUserForm';

function App() {
  const [user, setUser] = useState(null);
  const [badge, setBadge] = useState([]);
  const [activities, setActivities] = useState([]);

  // check for user
  useEffect(() => {
    fetch('/api/me').then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user));
      }
    });
  }, []);

  // get badges
  useEffect(() => {
    fetch('/api/badges').then((resp) => {
      if (resp.ok) {
        resp.json().then((badges) => setBadge(badges));
      }
    });
  }, []);

  useEffect(() => {
    fetch('/api/activities').then((resp) => {
      if (resp.ok) {
        resp.json().then((activity) => setActivities(activity));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />

      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route path="/users/:id/edit">
          <EditUserForm user={user} setUser={setUser} />
        </Route>
        <Route path="/makeaplan">
          <MakeAPlan
            user={user}
            badge={badge}
            setBadge={setBadge}
            activities={activities}
            setActivities={setActivities}
          />
        </Route>
        <Route path="/register">
          <Register
            user={user}
            badge={badge}
            setBadge={setBadge}
            activities={activities}
            setActivities={setActivities}
          />
        </Route>
        <Route path="/helpafriend">
          <HelpAFriend user={user}
            badge={badge}
            setBadge={setBadge}
            activities={activities}
            setActivities={setActivities}/>
        </Route>
        <Route path="/getsupplies">
          <GetSupplies user={user}
            badge={badge}
            setBadge={setBadge}
            activities={activities}
            setActivities={setActivities}/>
        </Route>
        <Route path="/firststeps">
          <FirstSteps user={user}
            badge={badge}
            setBadge={setBadge}
            activities={activities}
            setActivities={setActivities}/>
        </Route>
        <Route path="/getinvolved">
          <GetInvolved user={user}
            badge={badge}
            setBadge={setBadge}
            activities={activities}
            setActivities={setActivities}/>
        </Route>
        <Route path="/laststeps">
          <LastSteps user={user}
            badge={badge}
            setBadge={setBadge}
            activities={activities}
            setActivities={setActivities}/>
        </Route>
        <Route path="/raiseyourvote">
          <RaiseYourVote user={user}
            badge={badge}
            setBadge={setBadge}
            activities={activities}
            setActivities={setActivities}/>
        </Route>
      </Switch>
    </>
  );
}

export default App;

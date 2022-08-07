import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import Home from "./Home";
import MakeAPlan from "../pages/MakeAPlan";
import Register from "../pages/Register";
import HelpAFriend from "../pages/HelpAFriend";
import GetSupplies from "../pages/GetSupplies";
import FirstSteps from "../pages/FirstSteps";
import GetInvolved from "../pages/GetInvolved";
import LastSteps from "../pages/LastSteps";
import RaiseYourVote from "../pages/RaiseYourVote";
import EditUserForm from "../pages/EditUserForm";


function App() {
  const [user, setUser] = useState(null);
  


  useEffect(() => {
  
    fetch("/api/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user));
      }
    });
  }, []);




  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      
        <Switch>
          <Route exact path="/">
            <Home user={user}/>
          </Route>
          <Route path='/users/:id/edit'>
            <EditUserForm user={user} setUser={setUser}/>
          </Route>
          <Route path="/makeaplan">
            <MakeAPlan />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/helpafriend">
            <HelpAFriend />
          </Route>
          <Route path="/getsupplies">
            <GetSupplies />
          </Route>
          <Route path="/firststeps">
            <FirstSteps />
          </Route>
          <Route path="/getinvolved">
            <GetInvolved />
          </Route>
          <Route path="/laststeps">
            <LastSteps />
          </Route>
          <Route path="/raiseyourvote">
            <RaiseYourVote />
          </Route>
        </Switch>
        
    </>
  );
}

export default App;

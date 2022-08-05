import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import Home from "../pages/Home";
import NewAchievement from "../pages/User";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <div>
        <Switch>
          <Route path="/new">
            <NewAchievement user={user} />
          </Route>
          <Route path="/">
            <Home setUser={setUser}/>
          </Route>
        </Switch>
        </div>
    </>
  );
}

export default App;

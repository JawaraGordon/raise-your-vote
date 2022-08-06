import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import Home from "../pages/Home";


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
      <main>
        <Switch>
          <Route path="/">
            <Home setUser={setUser}/>
          </Route>
        </Switch>
        </main>
    </>
  );
}

export default App;

import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Button, Error, Input, FormField, Label, Wrapper } from "../styles";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((resp) => {
      setIsLoading(false);
      if (resp.ok) {
        resp.json().then((user) => onLogin(user));
      } else {
        resp.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <Wrapper>
      <div className="user-button">
    <form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormField>
      <FormField>
        <Button variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </Button>
        {/* sends user to guest experience */}
        <Link to="/guest" className="link-secondary" onClick={() => {}}>
              Guest
            </Link>
      </FormField>
      {/* maps styled error message */}
      <FormField>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
    </form>
    </div>
    </Wrapper>
  );
}

export default LoginForm;

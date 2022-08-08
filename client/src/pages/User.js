import { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router';
import { Button, Wrapper } from '../styles';
import user1 from '../img/user1.png';

function User({ user }) {
  const history = useHistory();

  function handleEditUser() {
    history.push(`/users/${user.id}/edit`);
  }

  return (
    <Wrapper>
      <div className="container">
        <div className="card-title">
          <h2>{user.username}</h2>
        </div>
        <div className="card-img">
          <img src={user1} alt="user image" />
        </div>
        <div className="card-text">
          <h2>Bio:</h2>
          <h3>{user.bio}</h3>
        </div>
        <div className="card-text">
          <h2>Age:{user.age}</h2>
        </div>
      </div>

      <div className="user-button">
        <Button onClick={() => handleEditUser(user.id)}>Edit</Button>
      </div>
    </Wrapper>
  );
}

export default User;

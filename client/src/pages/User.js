import { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Button, Wrapper } from '../styles';
import user1 from '../img/user1.png';

function User() {
  const [user, setUser] = useState([]);
  const history = useHistory();

  // const [id, username, image_url, bio, age] = user

  useEffect(() => {
    fetch('/user')
      .then((r) => r.json())
      .then((userUser) => {
        setUser(userUser);
      });
  }, []);

  function onDeleteUser(deletedUserId) {
    const filteredUser = user.filter((user) => user.id !== deletedUserId);

    setUser(filteredUser);
  }

  // function handleEditUser() {
  //   history.push(`/edituserform/${id}`);
  // }

  const handleDeleteUser = (userId) => {
    fetch(`/user/${userId}`, {
      method: 'DELETE',
      headers: { Accept: 'application/json' },
    });
    onDeleteUser(userId);
    history.push('/home');
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="card-title">
          <h2>User Name</h2>
        </div>
        <div className="card-img">
          <img src={user1} alt="badges" />
        </div>
        <div className="card-text">
          <h2>Bio:</h2>
          <h3>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
            asperiores aliquid expedita
          </h3>
        </div>
        <div className="card-text">
          <h2>Age: 19</h2>
        </div>
        <ul>
          {/* {user.map((user) => (
          <li key={user.id}>
            <span>
            <div className="card-title">
              {user.username} 
            <div/>
            <div className="card-img">
              {user.image_url} 
            <div/>
            <div className="card-text">
              {user.bio}
            <div/>
            <div className="card-text">
              {user.age}
            <div/>
            </span>
          </li>
        ))} */}
        </ul>
      </div>

      <div className="user-button">
        <Button>Edit</Button>
        {/* onClick={() => handleEditUser(user.id)} */}
        <Button onClick={() => handleDeleteUser(user.id)}>Delete</Button>
      </div>
    </Wrapper>
  );
}

export default User;

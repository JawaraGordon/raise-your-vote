import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { Button, Error, FormField, Input, Label, Textarea } from "../styles";

function User() {
  const [user, setUser] = useState([]);
  const history = useHistory();

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
      <h2>User Img</h2>
          </div>
      <div className="card-text">
      <h2>User Bio</h2>
          </div>
      <ul>
        {/* {user.map((user) => (
          <li key={user.id}>
            <span>
            <div className="card-title">
              {user.name} 
            <div/>
            <div className="card-img">
              {user.imgUrl} 
            <div/>
            <div className="card-text">
              {user.bio}
            <div/>
            </span>
            
          </li>
        ))} */}
      </ul>
      
      <div>
      <Button>
        Edit
      </Button>
      <Button onClick={() => handleDeleteUser(user.id)}>
              Delete
            </Button>
      </div>
      </div>
      
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default User;

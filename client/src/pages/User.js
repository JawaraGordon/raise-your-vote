import { useHistory } from 'react-router';
import { Button, Wrapper } from '../styles';

function User({ user }) {
  const history = useHistory();

  const { id, username, image_url, bio, age } = user;

  function handleEditUser() {
    history.push(`/users/${user.id}/edit`);
  }

  const handleDelete = () => {
    fetch(`/api/user/${user.id}`, {
      method: 'DELETE',
      headers: { Accept: 'application/json' },
    });
    window.location.reload();
  };

  function confirmAction() {
    let confirmAction = window.confirm('Are you sure?');
    if (confirmAction) {
      alert('See you at the polls');
      handleDelete(user.id);
    } else {
      alert('Welcome Back!');
    }
  }

  return (
    <Wrapper>
      <div className="container">
        <div className="card-title">
          <h2>{username}</h2>
        </div>
        <div className="card-img">
          <img src={image_url} alt="user" />
        </div>
        <div className="card-text">
          <h2>Bio:</h2>
          <h3>{bio}</h3>
        </div>
        <div className="card-text">
          <h2>Age:{age}</h2>
        </div>
      </div>

      <div className="user-button">
        <Button onClick={() => handleEditUser(user.id)}>Edit</Button>
        <Button onClick={() => confirmAction(user.id)}>Delete</Button>
      </div>
    </Wrapper>
  );
}

export default User;

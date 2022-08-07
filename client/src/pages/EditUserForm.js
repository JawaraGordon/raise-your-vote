import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, FormField, Input, Label, Wrapper } from '../styles';
import { useHistory } from 'react-router-dom';

function EditUserForm({ user, setUser, onUpdate }) {
  const [formData, setFormData] = useState({
    id: ' ',
    username: '',
    image_url: '',
    bio: '',
    age: '',
  });
  const history = useHistory();

  useEffect(() => {
    fetch(`/api/user/${user.id}`)
      .then((resp) => resp.json())
      .then((user) => setFormData(user));
  }, [user.id]);

  function handleChange(e) {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  }

  // updates the user info in database
  function handleUpdate(e) {
    e.preventDefault();

    fetch(`/api/user/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },

      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((updatedUser) => {
        onUpdate(updatedUser);
      });
    history.push('/');
  }

  function onUpdate(updatedUser) {
    setUser(updatedUser);
  }

  const handleDelete = () => {
    fetch(`/api/user/${user.id}`, {
      method: 'DELETE',
      headers: { Accept: 'application/json' },
    });
  };

  function confirmAction() {
    let confirmAction = window.confirm('Are you sure?');
    if (confirmAction) {
      alert('Good-Bye');
      handleDelete(user.id);
      history.push('/');
    } else {
      alert('Welcome Back');
    }
  }

  return (
    <Wrapper>
      <div className="user-button">
        <form autoComplete="off" onSubmit={handleUpdate}>
          <h3>Edit Your Info</h3>
          <Label htmlFor="name">Username</Label>
          <FormField>
            <Input
              className="input-text"
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </FormField>

          <Label htmlFor="image_url">Image Url</Label>
          <FormField>
            <Input
              className="input-text"
              id="image_url"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
            />
          </FormField>
          <Label htmlFor="bio">Bio</Label>
          <FormField>
            <Input
              className="input-text"
              type="text"
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
            />
          </FormField>
          <Label htmlFor="bio">Age</Label>
          <FormField>
            <Input
              className="input-text"
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </FormField>

          <Button onSubmit={handleUpdate} type="submit">
            Update
          </Button>
          <Button onClick={() => confirmAction}>Delete</Button>
          <div className="user-button">
            <Link className="link-primary" to={'/'}>
              Home
            </Link>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}

export default EditUserForm;

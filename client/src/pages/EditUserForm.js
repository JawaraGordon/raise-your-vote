import React, { useState, useEffect } from 'react';
import { Button, FormField, Label, Wrapper } from "../styles";
import { useHistory } from 'react-router-dom';

function EditUserForm({ user, setUser, onUpdate }) {
  const [formData, setFormData] = useState({
    id: ' ',
    name: '',
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

  function handleEdit(e) {
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

  return (

   <Wrapper>
    <div className="container">
    <section>
      <form className="form" autoComplete="off" onSubmit={handleEdit}>
        <h3>Edit Your Info</h3>
        <Label htmlFor="name">Name</Label>
        <FormField>
        <input
          className="input-text"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        </FormField>
        
        <Label htmlFor="image_url">Image Url</Label>
        <FormField>
        <input
          className="input-text"
          id="image_url"
          name="image_url"
          value={formData.image_url}
          onChange={handleChange}
        /></FormField>
        <Label htmlFor="bio">Bio</Label>
        <FormField>
        <input
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
        <input
          className="input-text"
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </FormField>
        <Button onSubmit={handleEdit} type="submit">
          Update
        </Button>
      </form>
    </section>
    </div>
    </Wrapper>
  );
}

export default EditUserForm;

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


function EditUserForm({ userId, onUpdate }) {
  const [formData, setFormData] = useState({
    id: ' ',
    name: '',
    image_url: '',
    bio: ''
  });
  const history = useHistory();
  

  useEffect(() => {
    fetch(`/user/${userId}`)
      .then((resp) => resp.json())
      .then((user) => setFormData(user));
  }, [userId]);

  function handleChange(e) {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  }

  function handleEdit(e) {
    e.preventDefault();

    fetch(`/user/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accepts: 'application/json',
      },

      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((updatedUser) => {
        onUpdate(updatedUser);
      });
    history.push('/home');
  }

  return (
    <section>
      <form className="form" autoComplete="off" onSubmit={handleEdit}>
        <h3>Edit Your Info</h3>
        <label  htmlFor="name">Name</label>
        <input className="input-text"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="image_url">Image Url</label>
        <input className="input-text"
          id="image_url"
          name="image_url"
          value={formData.image_url}
          onChange={handleChange}
        />
        <label htmlFor="bio">Bio</label>
        <input className="input-text"
          type="text"
          id="bio"
          name="bio"
          value={formData.link}
          onChange={handleChange}
        />

        <button onSubmit={handleEdit} type="submit">
          Update Project
        </button>
      </form>
    </section>
  );
}

export default EditUserForm;

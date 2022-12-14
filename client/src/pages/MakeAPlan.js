import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Label, Wrapper } from '../styles';
import makeaplan from '../img/makeaplan.png';

function MakeAPlan({ user, badge, setBadge, activities, setActivities }) {
  const [isChecked, setIsChecked] = useState(false);
  const [completed, setCompleted] = useState(null);

  function handleClick(e) {
    e.preventDefault();
    const userData = {
      user_id: Number(user.id),
      activity_id: Number(1),
      completed: true,
      name: 'makeaplan',
    };
    fetch('/api/badges', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    }).then((r) => {
      setCompleted(true);
      setBadge(true);
      
    });
  }

  return (
    <Wrapper>
      <div className="activity-img">
        <img src={makeaplan} alt="makeaplan" />
      </div>
      <div className="user-button">
        <Link
          className="link-primary"
          to={{ pathname: 'https://aactnow.org/why-vote/' }}
          target="_blank"
        >
          Learn More
        </Link>
      </div>
      <Label>
        <div className="user-button">
          <h1>Completed</h1>
        </div>
      </Label>

      <div className="user-button">
        <Label>
          <input
            type="checkbox"
            onClick={handleClick}
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />

          <div>
            <svg
              className={`checkbox  ${isChecked ? 'checkbox--active' : ''}`}
              aria-hidden="true"
              viewBox="0 0 15 11"
              fill="none"
            >
              <path
                d="M1 4.5L5 9L14 1"
                strokeWidth="2"
                stroke={isChecked ? '#fff' : 'none'}
              />
            </svg>
          </div>
        </Label>
      </div>
      <div className="user-button">
        <Link className="link-secondary" to={'/'}>
          Home
        </Link>
      </div>
    </Wrapper>
  );
}

export default MakeAPlan;

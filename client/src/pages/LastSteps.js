import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Label, Wrapper } from '../styles';
import laststeps from '../img/laststeps.png';

function LastSteps({ user, badge, setBadge, activities, setActivities }) {
  const [isChecked, setIsChecked] = useState(false);
  const [completed, setCompleted] = useState(null);

  function handleClick(e) {
    e.preventDefault();
    const userData = {
      user_id: Number(user.id),
      activity_id: Number(7),
      completed: true,
      name: 'laststeps',
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
        <img src={laststeps} alt="laststeps" />
      </div>
      <div className="user-button">
        <Link
          className="link-primary"
          to={{ pathname: 'https://www.ballotready.org/' }}
          target="_blank"
        >
          {' '}
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
          <svg
            className={`checkbox ${isChecked ? 'checkbox--active' : ''}`}
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

export default LastSteps;

import React from 'react';
import { Wrapper } from '../styles';
import badges from '../img/badges.png';

function Badges() {
  return (
    <Wrapper>
      <h2>Badges</h2>
      <div className="logo-small">
        <img src={badges} alt="badges" />
      </div>
      {/* dynamically generate badge list */}
      {/* <ul>
        {badges.map((badge) => (
          <li key={badge.id}>
            <span>
              {badge.image}
            </span>
          </li>
        ))}
      </ul> */}
    </Wrapper>
  );
}

export default Badges;

import React, { useEffect, useState } from 'react';
import { Box, Wrapper } from '../styles';
import Activities from '../pages/Activities';
import User from '../pages/User';
import Progress from '../pages/Progress';
import Badges from '../pages/Badges';

function Home({ user, badge }) {
  const [badges, setBadges] = useState(null);

  // return badge name object

  // const badgeList = badge.map((badge) => ({
  //   name: badge.name,
  // }));

  // spread name array to object
  // const badgeNameList = { ...badgeList };

  //creates a random number for progress bar
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  // change state to integer based on object key + value string
  useEffect(() => {
    // badgeNameList === { name: 'makeaplan' } ? setBadges(12) : setBadges(getRandomInt(12,100));
    setBadges(getRandomInt(12, 100));
  }, []);

  // console.log(badgeNameList);

  const badgeData = [{ bgcolor: '#44ab7a', completed: badges }];

  return (
    <Wrapper>
      <div>
        <Box>
          <div className="logo-small">
            <User key={user.id} user={user} />
          </div>
        </Box>
        <Box>
          <div className="user-button">
            <h2>Progress</h2>
            {badgeData.map((item, index) => (
              <Progress
                key={index}
                bgcolor={item.bgcolor}
                completed={item.completed}
              />
            ))}
          </div>
        </Box>

        <Box>
          <Badges />
        </Box>

        <Box>
          <Activities key={user.id} user={user} />
        </Box>
      </div>
    </Wrapper>
  );
}

export default Home;

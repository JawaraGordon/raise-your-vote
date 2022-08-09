import React, { useEffect, useState } from 'react';
import { Box, Wrapper } from '../styles';
import Activities from '../pages/Activities';
import User from '../pages/User';
import Progress from '../pages/Progress';
import Badges from '../pages/Badges';

function Home({ user, badge }) {
  // returns badge name array
  // const badgeList = badge.map(badge => {
  //     return {[badge.id] : badge.name}})

  const [badges, setBadges] = useState(null);

  // return badge name object
  const badgeList = badge.map((badge) => ({
    name: badge.name,
  }));

  // spread name array to object
  const badgeNameList = { ...badgeList };

  // change state to integer based on object key + value string
  useEffect(() => {
    badgeNameList === { name: 'makeaplan' } ? setBadges(12) : setBadges(0);
  }, []);

  console.log(badgeNameList);
  // console.log(badgeName)

  // function progressBar(badge) {
  // console.log(badge)

  // function progressBar (name) {
  //   console.log(name)
  //   if (name === 'makeaplan') {
  //     setBadges(1) }}

  // } else if (badgeName === 'makeaplan' && 'register') {
  //   <img src={require('../img/progress_bar2.png')} />;
  // } else if (badgeName === 'makeaplan' && 'register') {
  //   <img src={require('../img/progress_bar3.png')} />;
  // } else if (badgeName === 'makeaplan' && 'register') {
  //   <img src={require('../img/progress_bar4.png')} />;
  // } else if (badgeName === 'makeaplan' && 'register') {
  //   <img src={require('../img/progress_bar5.png')} />;
  // } else if (badgeName === 'makeaplan' && 'register') {
  //   <img src={require('../img/progress_bar6.png')} />;
  // } else if (badgeName === 'makeaplan' && 'register') {
  //   <img src={require('../img/progress_bar7.png')} />;
  // } else if (badgeName === 'makeaplan' && 'register') {
  //   <img src={require('../img/progress_bar8.png')} />;
  // } else if (badgeName === 'makeaplan' && 'register') {
  //   <img src={require('../img/progress_bar9.png')} />;
  // }

  const badgeData = [{ bgcolor: '#44ab7a', completed: badges }];

  // console.log(badgeList)
  // progressBar(badgeNameList)
  // console.log(badges)

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

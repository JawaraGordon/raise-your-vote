import React, { useEffect, useState } from 'react';
import { ProgressBarContainer, ProgressBarLabel, Wrapper } from "../styles";

const Progress = (props) => {


  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default Progress;













// import { Box, Button, LogoImg, Wrapper } from '../styles';
// import progress_bar1 from '../img/progress_bar1.png';
// import progress_bar2 from '../img/progress_bar2.png';
// import progress_bar3 from '../img/progress_bar3.png';
// import progress_bar4 from '../img/progress_bar4.png';
// import progress_bar5 from '../img/progress_bar5.png';
// import progress_bar6 from '../img/progress_bar6.png';
// import progress_bar7 from '../img/progress_bar7.png';
// import progress_bar8 from '../img/progress_bar8.png';
// import progress_bar9 from '../img/progress_bar9.png';

// function Progress({ user, badge }) {
//   // returns badges in the array
//   const badgeFinder = () => badge.map(badge => {
//     const badgeName = badge.name
//       console.log(badgeName)
//       return badgeName
//   })

//   console.log(badge)
  
//   const badgeName = badge.map((badge) => {
//     const badgeName = badge.name;
//     // console.log(badgeName);
//     return badgeName;
//   });

//   const progressBar = (name) => {
//     if (name === 'makeaplan') {
//       <img src={require('../img/progress_bar1.png')} />;
//     } else if (badgeName === 'makeaplan' && 'register') {
//       <img src={require('../img/progress_bar2.png')} />;
//     } else if (badgeName === 'makeaplan' && 'register') {
//       <img src={require('../img/progress_bar3.png')} />;
//     } else if (badgeName === 'makeaplan' && 'register') {
//       <img src={require('../img/progress_bar4.png')} />;
//     } else if (badgeName === 'makeaplan' && 'register') {
//       <img src={require('../img/progress_bar5.png')} />;
//     } else if (badgeName === 'makeaplan' && 'register') {
//       <img src={require('../img/progress_bar6.png')} />;
//     } else if (badgeName === 'makeaplan' && 'register') {
//       <img src={require('../img/progress_bar7.png')} />;
//     } else if (badgeName === 'makeaplan' && 'register') {
//       <img src={require('../img/progress_bar8.png')} />;
//     } else if (badgeName === 'makeaplan' && 'register') {
//       <img src={require('../img/progress_bar9.png')} />;
//     }
//   }

  
//   return (
//     <Wrapper>
//       <h2>Progress</h2>
//       {progressBar(badgeName)}

//       <div className="logo-small">
//             {badgeFinder("raiseyourvote")  ? 
//             <img src= {progress_bar9} alt="progress_bar" /> : ""} 
//           </div>
//     </Wrapper>
//   );
// }

// export default Progress;

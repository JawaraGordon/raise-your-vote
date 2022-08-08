import React,{ useEffect, useState } from "react";
import { Box, Button, LogoImg, Wrapper } from "../styles";
import progress_bar1 from "../img/progress_bar1.png";
import progress_bar2 from "../img/progress_bar2.png";

function Progress({ user, badge}) {

// returns all badges in the array
const badgeFinder = () => badge.map(item => {
  const badgeName = item.name
  if (badgeName === "register") {
    console.log(badgeName)
    return badgeName
}})

// console.log(badgeFinder())




  return (
    <Wrapper>
      <h2>Progress</h2>
      {/* <h2>{name}</h2> */}
      <div className="logo-small">
            {/* {badgeFinder() === "firststeps" ?  */}
            <img src= {progress_bar2} alt="progress_bar" /> 
            {/* : ""} */}
          </div>
    </Wrapper>
  );
}




export default Progress;

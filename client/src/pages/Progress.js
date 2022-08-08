import React,{ useEffect, useState } from "react";
import { Box, Button, LogoImg, Wrapper } from "../styles";
import progress_bar1 from "../img/progress_bar1.png";

function Progress({ user, badge}) {

console.log(badge)

  return (
    <Wrapper>
      <h2>Progress</h2>
      <div className="logo-small">
            <img src={progress_bar1} alt="progress_bar" />
          </div>
    </Wrapper>
  );
}




export default Progress;

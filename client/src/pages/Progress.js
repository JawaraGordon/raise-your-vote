import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button, LogoImg, Wrapper } from "../styles";
import progress_bar from "../img/progress_bar.png";

function Progress() {
  // const [badges, setBadges] = useState([]);

  // useEffect(() => {
  //   fetch("/api/badges")
  //     .then((r) => r.json())
  //     .then(setBadges);
  // }, []);

  return (
    <Wrapper>
      <h2>Progress</h2>
      <div className="logo-small">
            <img src={progress_bar} alt="progress_bar" />
          </div>
    </Wrapper>
  );
}




export default Progress;

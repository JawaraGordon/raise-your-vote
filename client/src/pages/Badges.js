import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button, LogoImg } from "../styles";
import badges from "../img/badges.png";

function Badges() {
  // const [badges, setBadges] = useState([]);

  // useEffect(() => {
  //   fetch("/badges")
  //     .then((r) => r.json())
  //     .then(setBadges);
  // }, []);

  return (
    <Wrapper>
      <h2>Badges</h2>
      <div className="logo-small">
            <img src={badges} alt="badges" />
          </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;


export default Badges;

import { useEffect, useState } from "react";
import { Route, Switch, Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Box, Wrapper} from "../styles";
import Activities from "./Activities";
import User from "./User";
import Progress from "./Progress";
import Badges from "./Badges";



function Home({setUser}) {
  const [badge, setBadge] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("/badges")
      .then((r) => r.json())
      .then(setBadge);
  }, []);

//   function editMode(id) {
//     setUserId(id);
//   }

//   function handleEdit() {
//     editMode(id);
//     history.push(`/edituserform/${id}`);
//   }


  return (
    <Wrapper>
    <div>
      <Box>
      <div className="logo-small">
          <User />
          </div></Box>
      <Box><Progress/></Box>
      
      <Box><Badges/></Box>
      {/* <ul>
        {badges.map((badge) => (
          <li key={badge.id}>
            <span>
              {badge.image}
            </span>
          </li>
        ))}
      </ul> */}
      
      <Box><Activities /></Box>
    </div>
    </Wrapper>
  );
}

export default Home;


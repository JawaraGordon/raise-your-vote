import { useEffect, useState } from "react";
import { Route, Switch, Link, useHistory } from "react-router-dom";
import { Box, Wrapper} from "../styles";
import Activities from "../pages/Activities";
import User from "../pages/User";
import Progress from "../pages/Progress";
import Badges from "../pages/Badges";




function Home({user, badge}) {

  const history = useHistory();

  return (
    <Wrapper>
    <div>
      <Box>
      <div className="logo-small">
          <User user={user}/>
          </div></Box>
      <Box><Progress badge={badge}/></Box>
      
      <Box><Badges/></Box>
      
      <Box><Activities user={user}/></Box>

    </div>
    </Wrapper>
  );
}

export default Home;


import { useEffect, useState } from "react";
import { Route, Switch, Link, useHistory } from "react-router-dom";
import { Box, Wrapper} from "../styles";
import Activities from "../pages/Activities";
import User from "../pages/User";
import Progress from "../pages/Progress";
import Badges from "../pages/Badges";
// import EditUserForm from "./EditUserForm";



function Home({user}) {
  const [badge, setBadge] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("/badges")
      .then((r) => r.json())
      .then(setBadge);
  }, []);


  return (
    <Wrapper>
    <div>
      <Box>
      <div className="logo-small">
          <User user={user}/>
          </div></Box>
      {/* <EditUserForm/> */}
      <Box><Progress/></Box>
      
      <Box><Badges/></Box>
      
      <Box><Activities user={user}/></Box>

    </div>
    </Wrapper>
  );
}

export default Home;


import { Box, Wrapper} from "../styles";
import Activities from "../pages/Activities";
import User from "../pages/User";
import Progress from "../pages/Progress";
import Badges from "../pages/Badges";




function Home({user,badge}) {



  return (
    <Wrapper>
    <div>
      <Box>
      <div className="logo-small">
          <User key={user.id} user={user}/>
          </div></Box>
      <Box><Progress  user={user} key={badge.id} badge={badge}/></Box>
      
      <Box><Badges/></Box>
      
      <Box><Activities key={user.id} user={user}/></Box>

    </div>
    </Wrapper>
  );
}

export default Home;


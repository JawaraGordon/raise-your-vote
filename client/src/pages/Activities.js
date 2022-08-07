import React,{ useEffect, useState, useHistory } from "react";
import { Link } from 'react-router-dom';
import { Button, Wrapper} from "../styles";

function Activities(user) {
  // const [activities, setActivities] = useState([]);
  // const history = useHistory();

  // useEffect(() => {
  //   fetch("/activities")
  //     .then((r) => r.json())
  //     .then(setActivities);
  // }, []);
  
  // function handleMakePlan() {
  //   history.push(`/makeaplan`);
  // }


  return (
    <>
    
        <div className="logo-small">
      <h2>Activities</h2>
      <div  className="container">
        <Link to="/makeaplan" className="link-secondary" >Make a Plan</Link>
        <Link to="/register" className="link-primary" >Register</Link>
        <Link to="/helpafriend" className="link-secondary" > Help a Friend</Link>
        <Link to="/getsupplies"className="link-primary" >Get Supplies</Link>
        <Link to="/firststeps"className="link-secondary" >First Steps</Link>
        <Link to="/getinvolved" className="link-primary" >Get Involved</Link>
        <Link to="/laststeps" className="link-secondary" >Last Steps</Link>
        <Link to="/raiseyourvote" className="link-primary" >Raise Your Vote</Link>
        </div>
        </div>
      
      </>
  );
}

export default Activities;

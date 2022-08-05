import React,{ useEffect, useState } from "react";
import { Button, Wrapper} from "../styles";
function Activities() {

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("/activities")
      .then((r) => r.json())
      .then(setActivities);
  }, []);

  function handleDeleteActivity(id) {
    fetch(`/activities/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setActivities((activities) =>
          activities.filter((activity) => activity.id !== id)
        );
      }
    });
  }

  return (
    <>
    
        <div className="logo-small">
      <h2>Activities</h2>
      <div  className="container">
        <Button color="secondary">Make a Plan</Button>
        <Button>Register</Button>
        <Button>Help a Friend</Button>
        <Button color="secondary">Get Supplies</Button>
        <Button color="secondary">First Steps</Button>
        <Button>Get Involved</Button>
        <Button>Last Steps</Button>
        <Button color="secondary">Raise Your Vote</Button>
        </div>
        </div>
      {/* <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <span>
              {activity.name} | Difficulty: {activity.difficulty}
            </span>
            <button onClick={() => handleDeleteActivity(activity.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul> */}
      
      </>
  );
}

export default Activities;

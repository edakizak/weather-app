// import React from "react";
import "./App.css";
import Form from "./components/Form/Form.jsx";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import List from "./components/list/List.jsx";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  function handleAddActivity(newActivity) {
    setActivities([{ id: uid(), ...newActivity }, ...activities]);
    // create a state for activities,
    // write a function handleAddActivity which accepts a new activity object as parameter and
    // adds this object to the activities state
    // please add a unique id to every new activity object; you can use uid to do so.
  }

  function handleDeleteActivity(activityId) {
    if (activityId !== null) {
      setActivities(
        activities.filter((activity) => activity.id !== activityId)
      );
    }
  }
  return (
    <>
      <Form onAddActivity={handleAddActivity} />
      <List activities={activities} deleteActivity={handleDeleteActivity} />
      {/* <List
        isGoodWeather={isGoodWeather}
        activities={
          isGoodWeather ? goodWeatherActivities : badWeatherActivities
        }
        onDeleteActivity={handleDeleteActivity}
      /> */}
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/form/Form.jsx";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  function handleAddActivity(newActivities) {
    setActivities([{ id: uid(), ...newActivities }, ...activities]);
    // create a state for activities,
    // write a function handleAddActivity which accepts a new activity object as parameter and
    // adds this object to the activities state
    // please add a unique id to every new activity object; you can use uid to do so.
  }
  return (
    <>
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;

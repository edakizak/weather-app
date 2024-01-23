/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Form from "./components/Form/Form.jsx";
import List from "./components/List/List.jsx";

const App = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const storedActivities = localStorage.getItem("activities");
    if (storedActivities) {
      setActivities(JSON.parse(storedActivities));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  const handleAddActivity = (newActivity) => {
    const updatedActivities = [...activities, newActivity];
    setActivities(updatedActivities);
  };

  return (
    <div>
      <Form onAddActivity={handleAddActivity} />
      <List activities={activities} />
    </div>
  );
};

export default App;

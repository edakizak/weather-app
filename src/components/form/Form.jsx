// Import statements:
import "./Form.css";
import { useState, useEffect } from "react";

// Component declaration:
export default function Form({ onAddActivity }) {
  // State initialization:
  const [activity, setActivity] = useState("");
  const [isGoodWeather, setIsGoodWeather] = useState(false);

  // handleSubmit is a function that's called when the form is submitted.
  const handleSubmit = (event) => {
    event.preventDefault();
    onAddActivity({ name: activity, isGoodWeather });
    setActivity("");
    setIsGoodWeather(false);
    // console.log(setIsGoodWeather);
  };
  // Load activities from local storage on component mount
  useEffect(() => {
    const storedActivities = localStorage.getItem("activities");
    if (storedActivities) {
      const parsedActivities = JSON.parse(storedActivities);
      setActivities(parsedActivities);
    }
  }, []);

  // Save activities to local storage whenever the activities state changes
  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>Add New Activity:</h4>
      <label htmlFor="inputName" className="inputName">
        Name:
      </label>
      <input
        type="text"
        id="inputName"
        maxLength={60}
        name="inputName"
        placeholder="Enter your activity"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      ></input>
      <label htmlFor="inputGoodWeather" className="inputGoodWeather">
        Good Weather Activity:
      </label>
      <input
        className="checkbox"
        type="checkbox"
        id="inputGoodWeather"
        name="inputGoodWeather"
        checked={isGoodWeather}
        onChange={(e) => setIsGoodWeather(e.target.checked)}
      ></input>
      <button type="submit">Add Activity</button>
    </form>
  );
}

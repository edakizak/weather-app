// Import statements:
import "./Form.css";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

// Component declaration:
export default function Form({ onAddActivity }) {
  // State initialization:
  const [activity, setActivity] = useState("");
  const [isGoodWeather, setIsGoodWeather] = useState(false);
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  // handleSubmit is a function that's called when the form is submitted.
  const handleSubmit = (event) => {
    event.preventDefault();
    const newActivity = { id: Date.now(), name: activity, isGoodWeather };
    onAddActivity(newActivity);
    setActivities([...activities, newActivity]);
    setActivity("");
    setIsGoodWeather(false);
    // console.log(setIsGoodWeather);
  };
  return (
    <>
      {/* <List activities={activities} /> */}
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add New Activity:</h4>
        <label htmlFor="inputName" className="inputName"></label>
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
          Is it <br />
          🌤 good weather 🌤 <br />
          activity?
        </label>
        <input
          className="checkbox "
          type="checkbox"
          id="inputGoodWeather"
          name="inputGoodWeather"
          checked={isGoodWeather}
          // onChange event is executed every time the checkbox is clicked. e.target refers to the DOM element that triggered the checkbox input.
          onChange={(e) => setIsGoodWeather(e.target.checked)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

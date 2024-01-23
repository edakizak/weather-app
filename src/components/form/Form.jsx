// Import statements:
import "./Form.css";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

// Component declaration:
// export default function Form({ onAddActivity }) {
// State initialization:
// const [activity, setActivity] = useState("");
// const [isGoodWeather, setIsGoodWeather] = useState(false);
// const [activities, setActivities] = useLocalStorageState("activities", {
//   defaultValue: [],
// });

export const Form = ({ onAddActivity }) => {
  const [activity, setActivity] = useState("");
  const [isGoodWeather, setIsGoodWeather] = useState(false);
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    data.inputGoodWeather = event.target.inputGoodWeather.checked === true;
    onAddActivity(data);
    console.log("form", formData);
    console.log("data", data);
    event.target.reset();
    event.target.inputName.focus();
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
};

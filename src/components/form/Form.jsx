// Import statements:
import "./Form.css";
import { useState } from "react";

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
        // onChange event is executed every time the checkbox is clicked. e.target refers to the DOM element that triggered the checkbox input.
        onChange={(e) => setIsGoodWeather(e.target.checked)}
      ></input>
      <button type="submit">Add Activity</button>
    </form>
  );
}

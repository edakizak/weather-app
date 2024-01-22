import "./Form.css";
import { useState } from "react";

export default function Form({ onAddActivity }) {
  const [activity, setActivity] = useState("");
  const [isGoodWeather, setIsGoodWeather] = useState(false);

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
        onChange={(e) => setIsGoodWeather(e.target.checked)}
      ></input>
      <button type="submit">Add Activity</button>
    </form>
  );
}

import React, { useState } from "react";

const Form = ({ onAddActivity }) => {
  const [name, setName] = useState("");
  const [isForGoodWeather, setIsForGoodWeather] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const activity = {
      name,
      isForGoodWeather,
    };
    onAddActivity(activity);
    setName("");
    setIsForGoodWeather(false);
    document.getElementById("nameInput").focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Activity</h2>
      <label htmlFor="nameInput">Activity Name:</label>
      <input
        type="text"
        id="nameInput"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label htmlFor="weatherCheckbox">Good Weather Activity:</label>
      <input
        type="checkbox"
        id="weatherCheckbox"
        checked={isForGoodWeather}
        onChange={(e) => setIsForGoodWeather(e.target.checked)}
      />
      <br />
      <button type="submit">Add Activity</button>
    </form>
  );
};

export default Form;

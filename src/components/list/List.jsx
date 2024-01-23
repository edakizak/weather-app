import "./List.css";
import React from "react";
import useLocalStorageState from "react";
export default function List(activities, isGoodWeather) {
  return (
    <ul className="activity-list">
      {activities.map((activity) => (
        <li className="list_item" key={activity.id}>
          {" "}
          {activity.name} - {activity.isGoodWeather ? "Good" : "Bad"} Weather
          Activity
        </li>
      ))}
    </ul>
  );
}

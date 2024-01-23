// import React from "react";
import "./List.css";

// eslint-disable-next-line react/prop-types
export default function List({ activities, deleteActivity, isGoodWeather }) {
  return (
    <ul className="activity-list">
      {activities.map((activity) => (
        <li className="list_item" key={activity.id}>
          {activity.name} {activity.isGoodWeather ? "🌤" : "⚡️"} weather
          activity
          <button
            className="delete-button"
            onClick={() => deleteActivity(activity.id)}
          >
            x
          </button>
        </li>
      ))}
    </ul>
  );
}

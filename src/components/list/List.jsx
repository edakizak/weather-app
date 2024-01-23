import "./List.css";
// import React from "react";
// import useLocalStorageState from "react";
export default function List({ activities, deleteActivity, isGoodWeather }) {
  return (
    <ul className="activity-list">
      {activities.map((activity) => {
        return (
          <li className="list_item" key={activity.id}>
            {activity.isGoodWeather ? "🌤" : "⚡️"} weather activity:{" "}
            {activity.name}
            <button
              className="delete-button"
              onClick={() => deleteActivity(activity.id)}
            >
              <span className="emoji">🗑</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

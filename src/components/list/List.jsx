import "./List.css";
// import React from "react";
// import useLocalStorageState from "react";
export default function List({ activities, deleteActivity, isGoodWeather }) {
  return (
    <ul className="activity-list">
      {activities.map((activity) => {
        return (
          <li className="list_item" key={activity.id}>
            {activity.name} - {activity.isGoodWeather ? "Good" : "Bad"} Weather
            Activity
            <button
              className="delete-button"
              onClick={() => deleteActivity(activity.id)}
            >
              x
            </button>
          </li>
        );
      })}
    </ul>
  );
}

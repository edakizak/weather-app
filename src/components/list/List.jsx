// import React from "react";
import "./List.css";

// eslint-disable-next-line react/prop-types
export default function List({ activities, deleteActivity, isGoodWeather }) {
  return (
    <>
      {" "}
      {isGoodWeather === true ? (
        <h2>
          Awesome weather! <br />
          Go outside and:
        </h2>
      ) : (
        <h2>
          Bad weather! <br />
          Stay inside and:
        </h2>
      )}
      <ul className="activity-list">
        {activities.map((activity) => (
          <li className="list_item" key={activity.id}>
            {activity.name} {activity.isGoodWeather ? "🌤" : "⚡️"} weather
            activity
            <button
              className="delete-button"
              onClick={() => deleteActivity(activity.id)}
            >
              <span className="emoji">🗑</span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

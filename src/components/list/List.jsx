// import React from "react";
import "./List.css";

// eslint-disable-next-line react/prop-types
export default function List({ activities, onDeleteActivity, isGoodWeather }) {
  console.log(activities);
  return (
    <>
      {isGoodWeather === true ? (
        <h2>
          Good weather 🌤 <br />
          Go outside and
        </h2>
      ) : (
        <h2>
          Bad weather⚡️ <br />
          Stay inside and
        </h2>
      )}
      <ul className="activity-list">
        {activities.map((activity) => (
          <li className="list_item" key={activity.id}>
            {activity.name}
            <button
              className="delete-button"
              onClick={() => onDeleteActivity(activity.id)}
            >
              <span className="emoji">🗑</span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

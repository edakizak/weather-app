import "./List.css";

export default function List({ activities }) {
  return (
    <ul>
      {activities.map((activity, index) => (
        <li key={index}>{activity.name}</li>
      ))}
    </ul>
  );
}

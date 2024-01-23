// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Locations.css";

// eslint-disable-next-line react/prop-types
export default function Locations({ selectedLocation, setSelectedLocation }) {
  const locationOptions = [
    { value: "europe", label: "Europe" },
    { value: "arctic", label: "Arctic" },
    { value: "sahara", label: "Sahara" },
    { value: "rainforest", label: "Rainforest" },
  ];

  const handleLocationChange = (event) => {
    const selectedLocation = event.target.value;
    setSelectedLocation(selectedLocation);
  };

  return (
    <select value={selectedLocation} onChange={handleLocationChange}>
      <option value="">Select a location</option>
      {locationOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

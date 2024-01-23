/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./Locations.css";
import { useState } from "react";
export default function Locations() {
  const locationOptions = [
    { value: "europe", label: "Europe" },
    { value: "arctic", label: "Arctic" },
    { value: "sahara", label: "Sahara" },
    { value: "rainforest", label: "Rainforest" },
  ];
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleLocationChange = async (event) => {
    const selectedLocation = event.target.value;
    setSelectedLocation(selectedLocation);

    return (
      <>
        <select value={selectedLocation} onChange={handleLocationChange}>
          <option value="">Select a location</option>
          {locationOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </>
    );
  };
}

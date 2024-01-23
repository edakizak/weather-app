// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./App.css";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import Form from "./components/form/Form.jsx";
import List from "./components/list/List.jsx";
import Weather from "./components/weather/Weather.jsx";
import Locations from "./components/locations/Locations.jsx";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const isGoodWeather = weather?.isGoodWeather;

  const goodWeatherActivities = activities.filter(
    (activity) => activity.isGoodWeather === true
  );
  const badWeatherActivities = activities.filter(
    (activity) => activity.isGoodWeather === false
  );
  const weatherUrl = `https://example-apis.vercel.app/api/weather/${selectedLocation}`;

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
          const weatherData = await response.json();
          setWeather(weatherData);
        } else {
          console.error("Failed to fetch weather data.");
        }
      } catch (error) {
        console.error("Error while fetching weather data:", error);
      }
    }
    fetchWeatherData();

    const intervalID = setInterval(fetchWeatherData, 5000);
    return () => {
      clearInterval(intervalID);
    };
  }, [weatherUrl]);

  function handleAddActivity(newActivity) {
    console.log("New activity:", newActivity);
    setActivities([{ id: uid(), ...newActivity }, ...activities]);
  }

  function handleDeleteActivity(activityId) {
    setActivities(activities.filter((activity) => activity.id !== activityId));
  }
  console.log("App", activities);
  console.log("good", goodWeatherActivities);

  return (
    <>
      <Locations
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />
      <Weather weather={weather} />
      <List
        isGoodWeather={isGoodWeather}
        activities={
          isGoodWeather ? goodWeatherActivities : badWeatherActivities
        }
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;

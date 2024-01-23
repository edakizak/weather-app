// import React from "react";
import "./App.css";
import Form from "./components/form/Form.jsx";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import List from "./components/list/List.jsx";
import { useEffect, useState } from "react";
import Weather from "./components/weather/Weather.jsx";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState("");
  // const isGoodWeather = true; // In the App.js, add a variable const isGoodWeather = true.
  const [isGoodWeather, setIsGoodWeather] = useState({});
  const filteredActivities = activities.filter(
    (activity) => activity.isGoodWeather === isGoodWeather
  ); //Filter the activities for those whose key isForGoodWeather is equal to the global isGoodWeather variable.

  const weatherUrl = `https://example-apis.vercel.app/api/weather`;
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
    setActivities([{ id: uid(), ...newActivity }, ...activities]);
    // create a state for activities,
    // write a function handleAddActivity which accepts a new activity object as parameter and
    // adds this object to the activities state
    // please add a unique id to every new activity object; you can use uid to do so.
  }

  function handleDeleteActivity(activityId) {
    if (activityId !== null) {
      setActivities(
        activities.filter((activity) => activity.id !== activityId)
      );
    }
  }
  return (
    <>
      <Weather weather={weather} />
      <List
        activities={filteredActivities}
        deleteActivity={handleDeleteActivity}
        isGoodWeather={weather}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;

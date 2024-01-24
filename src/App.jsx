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
  const [selectedLocation, setSelectedLocation] = useLocalStorageState(
    "selectedLocation",
    { defaultValue: [] }
  );

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

          const body = document.body;
          if (selectedLocation === "") {
            body.style.background =
              "radial-gradient(circle, rgba(251,63,236,1) 0%, rgba(253,170,49,1) 68%, rgba(255,115,3,1) 100%)";
            body.style.color = "#FAF6DB";
          } else if (selectedLocation === "europe") {
            body.style.background =
              " linear-gradient(180deg, rgba(179,143,255,1) 0%, rgba(99,73,247,1) 100%)";
            body.style.color = "#ECDFFD";
          } else if (selectedLocation === "arctic") {
            body.style.background =
              "linear-gradient(180deg, rgba(152,222,236,1) 0%, rgba(191,235,252,1) 49%, rgba(74,72,108,1) 100%)";
            body.style.color = "#06718E";
          } else if (selectedLocation === "sahara") {
            body.style.background =
              "linear-gradient(180deg, rgba(255,251,143,1) 0%, rgba(247,127,73,1) 100%)";
            body.style.color = "#DC5C09";
          } else if (selectedLocation === "rainforest") {
            body.style.background =
              "linear-gradient(180deg, rgba(202,255,159,1) 0%, rgba(0,66,5,1) 100%)";
            body.style.color = "#DCFAD2";
          }
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

// import React from "react";
import "./App.css";
import Form from "./components/form/Form.jsx";
import Weather from "./components/weather/Weather.jsx";
import List from "./components/list/List.jsx";
import { uid } from "uid";
import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import Locations from "./components/locations/Locations.jsx";

function App() {
  const [weather, setWeather] = useState("");
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [selectedLocation, setSelectedLocation] = useState("");

  const weatherUrl = `https://example-apis.vercel.app/api/weather/${selectedLocation}`;

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
          const weatherData = await response.json();
          setWeather(weatherData);
        } else {
          console.error("bad response");
        }
      } catch (error) {
        console.error("fetching weather data failed", error);
      }
    }

    fetchWeatherData();
    const interval = setInterval(fetchWeatherData, 5000);
    return () => clearInterval(interval);
  }, [weatherUrl]);

  const handleAddActivity = (newActivity) => {
    setActivities([newActivity, ...activities]);
  };
  const handleDeleteActivity = (id) => {
    setActivities(activities.filter((activity) => activity.id !== id));
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const filteredActivities = activities.filter((activity) => {
    return weather.isGoodWeather
      ? activity.inputGoodWeather
      : !activity.inputGoodWeather;
  });

  return (
    <>
      <Locations
        selectedLocation={selectedLocation}
        onLocationChange={handleLocationChange}
      />
      <Weather weather={weather} />
      <List
        activities={filteredActivities}
        onDeleteActivity={handleDeleteActivity}
        isGoodWeather={weather}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

//   return (
//     <main
//       className={`weather-app ${
//         weather.isGoodWeather ? "good-weather" : "bad-weather"
//       }`}
//     >
//       <Weather
//         condition={weather.condition}
//         temperature={weather.temperature}
//       />
//       <Form onAddActivity={handleAddActivity} />
//       <section className="weather-selection">
//         <Locations
//           selectedLocation={selectedLocation}
//           onLocationChange={handleLocationChange}
//         />
//       </section>
//       <List
//         activities={filteredActivities}
//         onDeleteActivity={handleDeleteActivity}
//       />
//     </main>
//   );
// }

export default App;

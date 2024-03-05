import Search from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLiks: 19.23,
    humidity: 19,
    temp: 20.62,
    tempMax: 21.05,
    tempMin: 20.62,
    weather: "haze",
  });

  let updateInfos = (result) => {
    setWeatherInfo(result);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Weather App</h2>
      <Search updateInfo={updateInfos} />
      <InfoBox info = {weatherInfo} />
    </div>
  );
}

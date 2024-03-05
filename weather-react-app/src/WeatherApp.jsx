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

  let updateInfos = (fetchedValue) => {
    // fetched values have values which is passed to setWeatherInfo
    console.log("koon ine", fetchedValue);
    setWeatherInfo(fetchedValue);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Weather App</h2>
      <Search updateInfo={updateInfos} />{" "}
      {/* updateInfo ka updateInfo(result) ku as a setWeatherInfo(fetchedValue) karko print karrin so  */}
      <InfoBox info={weatherInfo} />
      {/* Infobox is equal to weatherInfo */}
      {/* info ki jagah jaako weatherinfo replace hojata so */}
    </div>
  );
}

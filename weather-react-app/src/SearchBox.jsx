import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function Search({ updateInfo }) {
  const [city, setCity] = useState(""); // searchbox City
  const [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "ca46643c667d769c20e96dbeb1b1c644";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonKaResponse = await response.json();
      console.log(jsonKaResponse);

      let result = {
        city: city,
        temp: jsonKaResponse.main.temp,
        tempMin: jsonKaResponse.main.temp_min,
        tempMax: jsonKaResponse.main.temp_max,
        humidity: jsonKaResponse.main.humidity,
        feelsLiks: jsonKaResponse.main.feels_like,
        weather: jsonKaResponse.weather[0].description,
      };
      console.log( result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  const handleCLick = (evt) => {
    setCity(evt.target.value); // to write in a search box
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(city);
      setCity("");
      let data = await getWeatherInfo();
      updateInfo(data);
      console.log("yeh data", data);
      console.log("yeh updatewala", updateInfo(data));
    } catch (err) {
      setError(true);  
    }
  };

  return (
    <div className="searchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleCLick}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Send
        </Button>
        {error && <p style={{ color: "red" }}>No such place exist!</p>}
      </form>
    </div>
  );
}

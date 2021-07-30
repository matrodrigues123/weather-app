import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setCity } from "../store/weather.actions";
import "./WeatherInfo.scss";

const API_KEY_OPEN_WEATHER = "611419d6728fd7f88850a14c5168474c";
const API_KEY_FLICKR = "b66f6563e67baaf5b42f2667c079e4bd";

const WeatherInfo = () => {
  const cityInfo = useSelector((state) => state.cityData.cityInfo);
  const [city, setTown] = useState("");
  const dispatch = useDispatch();

  const fetchCityDetails = async () => {
    if (city && city !== "") {
      const responseWeather = await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY_OPEN_WEATHER}`
        )
        .catch((err) => console.log(err));
      console.log(responseWeather);
      dispatch(setCity(responseWeather.data.main));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCityDetails();
  };

  return (
    <div className="container">
      <div className="left">
        <h2>{cityInfo.temp && `${cityInfo.temp}º`}</h2>
      </div>
      <div className="right">
        <h1>Weather Info</h1>
        <form onSubmit={handleSubmit}>
          <input
            id="city"
            placeholder="City"
            type="text"
            value={city}
            onChange={(e) => setTown(e.target.value)}
          ></input>
          <button>Submit</button>
        </form>
        <h2>Humidity: {cityInfo.humidity} % </h2>
        <h2>Pressure: {cityInfo.pressure} Pa</h2>
      </div>
    </div>
  );
};

export default WeatherInfo;

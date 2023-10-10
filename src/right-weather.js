import {
  setLocationData,
  setLLocationTime,
  setTemperatureData,
  setCurrentWeatherData,
  setPredictionsData,
  setWindHumidity,
  setWeatherSpecifics,
  setSunMoonData,
  displayError,
  clearError,
} from "./domAssignment";

import { showLoader, hideLoader } from "./loader";

// CITY INPUT VALUE
function getCityValue() {
  const cityInput = document.getElementById("city-value");
  const cityValue = cityInput.value;
  return cityValue;
}

// SEARCH CITY BUTTON FUNCTION IMPLEMENTATION
async function searchCityWeather() {
  showLoader();
  const city = getCityValue();
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=d3618822b8134356aff61709230510&q=${city}&days=2&aqi=no&alerts=no`
  );

  if (response.status !== 200) {
    throw new Error("invalid location");
  }

  const data = await response.json();
  return data;
}

function useWeatherData() {
  clearError();
  searchCityWeather()
    .then((data) => {
      setLocationData(data);
      setLLocationTime(data);
      setTemperatureData(data);
      setCurrentWeatherData(data);
      setPredictionsData(data);
      setWindHumidity(data);
      setWeatherSpecifics(data);
      setSunMoonData(data);
      hideLoader();
      console.log(data);
    })
    .catch((err) => displayError(err));
}

const searchCityBtn = document.querySelector(".city-submit-btn");
searchCityBtn.addEventListener("click", useWeatherData);

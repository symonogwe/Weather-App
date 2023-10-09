import {
  setLocationData,
  setLLocationTime,
  setTemperatureData,
  setCurrentWeatherData,
  setPredictionsData,
  setWindHumidity,
  setWeatherSpecifics,
  setSunMoonData,
} from "./domAssignment";

// CITY INPUT VALUE
function getCityValue() {
  const cityInput = document.getElementById("city-value");
  const cityValue = cityInput.value;
  return cityValue;
}

// SEARCH CITY BUTTON FUNCTION IMPLEMENTATION
async function searchCityWeather() {
  const city = getCityValue();
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=d3618822b8134356aff61709230510&q=${city}&days=1&aqi=no&alerts=no`
  );
  const data = await response.json();
  return data;
}

function useWeatherData() {
  searchCityWeather().then((data) => {
    setLocationData(data);
    setLLocationTime(data);
    setTemperatureData(data);
    setCurrentWeatherData(data);
    setPredictionsData(data);
    setWindHumidity(data);
    setWeatherSpecifics(data);
    setSunMoonData(data);
    console.log(data);
  });
}

const searchCityBtn = document.querySelector(".city-submit-btn");
searchCityBtn.addEventListener("click", useWeatherData);

/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-extraneous-dependencies
import moment from "moment";
import clouds from "./Assets/clouds.svg";
import partlyCloudy from "./Assets/partly-cloudy.svg";
import rainy from "./Assets/rainy.svg";
import sunny from "./Assets/sunny.svg";

import windSvg from "./Assets/wind.svg";
import humiditySvg from "./Assets/humidity.svg";

// WIND ICON ASSIGNMENT
const windIcon = document.querySelector(".wind-icon");
windIcon.src = windSvg;

// HUMIDITY ICON ASSIGNMENT
const humidityIcon = document.querySelector(".humidity-icon");
humidityIcon.src = humiditySvg;

// WEATHER ICONS ARRAY
const weatherIconArray = [clouds, partlyCloudy, rainy, sunny];

// LOCATION DOM FUNCTIONALITY
function setLocationData(dataObject) {
  const region = document.querySelector(".location-region-txt");
  region.textContent = dataObject.location.name;

  const area = document.querySelector(".location-area-txt");
  area.textContent = dataObject.location.region;

  const country = document.querySelector(".location-country-txt");
  country.textContent = dataObject.location.country;
}

// TIME DOM FUNCTIONALITY
function setLLocationTime(dataObject) {
  const locationTime = document.querySelector(".location-time-txt");
  locationTime.textContent = dataObject.location.localtime;
}

// TEMPERATURE DOM FUNCTIONALITY
function setTemperatureData(dataObject) {
  const celsius = document.querySelector(".celsius-txt");
  celsius.textContent = dataObject.current.temp_c;

  const fahrenheit = document.querySelector(".f-txt");
  fahrenheit.textContent = dataObject.current.temp_f;
}

// WEATHER DOM FUNCTIONALITY
function setCurrentWeatherData(dataObject) {
  const currentWeather = document.querySelector(".weather-txt");
  const condition = dataObject.current.condition.text.toLowerCase();
  currentWeather.textContent = condition;

  const weatherIcon = document.querySelector(".weather-icon-big");
  if (condition === "partly cloudy") weatherIcon.src = weatherIconArray[1];
  if (condition.includes("sun")) weatherIcon.src = weatherIconArray[3];
  if (condition === "clear") weatherIcon.src = weatherIconArray[0];
  if (condition.includes("rain")) weatherIcon.src = weatherIconArray[2];
  if (condition.includes("cloud")) weatherIcon.src = weatherIconArray[0];
  if (condition === "overcast") weatherIcon.src = weatherIconArray[0];
}

// PREDICTIONS DOM FUNCTIONALITY
function setPredictionsData(dataObject) {
  const currentTime = moment(dataObject.location.localtime, "YYYY-MM-DD HH:mm");
  const timeArray = dataObject.forecast.forecastday[0].hour;
  const newTimeArray = timeArray.filter((obj) => {
    const time = moment(obj.time, "YYYY-MM-DD HH:mm");
    if (time.isAfter(currentTime)) {
      return obj;
    }
  });
  const predictionLocation1 = document.querySelectorAll(
    ".prediction-location-1"
  );
  predictionLocation1.forEach((element) => {
    element.textContent = dataObject.location.name;
  });

  console.log(newTimeArray);

  checkEmptyIndex(newTimeArray, dataObject);

  // predictions div 1
  const predictionTime1 = document.querySelector(".prediction-time-1");
  const date1 = moment(newTimeArray[0].time, "YYYY-MM-DD HH:mm");
  const time1 = date1.format("HH:mm");
  predictionTime1.textContent = time1;

  const predictionWeather1 = document.querySelector(".prediction-weather-1");
  predictionWeather1.textContent = newTimeArray[0].condition.text;

  // predictions div 2
  const predictionTime2 = document.querySelector(".prediction-time-2");
  const date2 = moment(newTimeArray[1].time, "YYYY-MM-DD HH:mm");
  const time2 = date2.format("HH:mm");
  predictionTime2.textContent = time2;

  const predictionWeather2 = document.querySelector(".prediction-weather-2");
  predictionWeather2.textContent = newTimeArray[1].condition.text;

  // predictions div 3
  const predictionTime3 = document.querySelector(".prediction-time-3");
  const date3 = moment(newTimeArray[2].time, "YYYY-MM-DD HH:mm");
  const time3 = date3.format("HH:mm");
  predictionTime3.textContent = time3;

  const predictionWeather3 = document.querySelector(".prediction-weather-3");
  predictionWeather3.textContent = newTimeArray[2].condition.text;

  // predictions div 4
  const predictionTime4 = document.querySelector(".prediction-time-4");
  const date4 = moment(newTimeArray[3].time, "YYYY-MM-DD HH:mm");
  const time4 = date4.format("HH:mm");
  predictionTime4.textContent = time4;

  const predictionWeather4 = document.querySelector(".prediction-weather-4");
  predictionWeather4.textContent = newTimeArray[3].condition.text;
}

// WIND & HUMIDITY DOM FUNCTIONALITY
function setWindHumidity(dataObject) {
  const windData = document.querySelector(".wind-info-txt");
  windData.textContent = `${dataObject.current.wind_kph}kph`;

  const humidityData = document.querySelector(".humidity-info-txt");
  humidityData.textContent = `${dataObject.current.humidity}%`;
}

// WEATHER SPECIFICS DOM FUNCTIONALITY
function setWeatherSpecifics(dataObject) {
  const specifics1 = document.querySelector(".specifics-1-value");
  specifics1.textContent = `${dataObject.current.wind_degree}°`;

  const specifics2 = document.querySelector(".specifics-2-value");
  specifics2.textContent = dataObject.current.wind_dir;

  const specifics3 = document.querySelector(".specifics-3-value");
  specifics3.textContent = `${dataObject.current.cloud}%`;

  const specifics4 = document.querySelector(".specifics-4-value");
  specifics4.textContent = `${dataObject.current.humidity}%`;

  const specifics5 = document.querySelector(".specifics-5-value");
  specifics5.textContent = `${dataObject.current.uv}%`;

  const specifics6 = document.querySelector(".specifics-6-value");
  specifics6.textContent = `${dataObject.current.gust_kph}kph`;
}

// SUN & MOON DOM FUNCTIONALITY
function setSunMoonData(dataObject) {
  const sunriseValue = document.querySelector(".sunrise-value");
  sunriseValue.textContent = dataObject.forecast.forecastday[0].astro.sunrise;

  const sunsetValue = document.querySelector(".sunset-value");
  sunsetValue.textContent = dataObject.forecast.forecastday[0].astro.sunset;

  const moonPhaseValue = document.querySelector(".moon-phase-value");
  moonPhaseValue.textContent =
    dataObject.forecast.forecastday[0].astro.moon_phase;
}

// INVALID CITY VALUE
function displayError(message) {
  const errorTxt = document.querySelector(".error-txt");
  errorTxt.textContent = message;
}

function clearError() {
  const errorTxt = document.querySelector(".error-txt");
  errorTxt.textContent = "";
}

// UTILITY FUNCTIONS
function checkEmptyIndex(arr, obj) {
  if (arr.length === 0) {
    arr[0] = obj.forecast.forecastday[1].hour[0];
    arr[1] = obj.forecast.forecastday[1].hour[1];
    arr[2] = obj.forecast.forecastday[1].hour[2];
    arr[3] = obj.forecast.forecastday[1].hour[3];
  } else {
    while (arr.length < 4) {
      if (arr[1] === undefined && arr[0] !== undefined) {
        arr[1] = obj.forecast.forecastday[1].hour[0];
        arr[2] = obj.forecast.forecastday[1].hour[1];
        arr[3] = obj.forecast.forecastday[1].hour[2];
      }
      if (arr[2] === undefined && arr[1] !== undefined) {
        arr[2] = obj.forecast.forecastday[1].hour[0];
        arr[3] = obj.forecast.forecastday[1].hour[1];
      }
      if (arr[3] === undefined) {
        arr[3] = obj.forecast.forecastday[1].hour[0];
      }
    }
  }
}

export {
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
};

import fIcon from "./Assets/f-temp.svg";
import cIcon from "./Assets/c-temp.svg";

import cloudIcon from "./Assets/clouds.svg";

// celsius icon assignment
const celsiusIcon = document.querySelector(".celsius-icon");
celsiusIcon.src = cIcon;

// fahrenheit  icon assignment
const fahrenheitIcon = document.querySelector(".f-icon");
fahrenheitIcon.src = fIcon;

// weather condition assignment
const weatherIcon = document.querySelector(".weather-icon-big");
weatherIcon.src = cloudIcon;

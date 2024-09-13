function cityFn(event) {
  event.preventDefault();
  let city = document.querySelector("#cityName");
  let valueCity = city.value;

  let h1 = document.querySelector("h1");
  h1.innerHTML = `${valueCity}`;
}
let form = document.querySelector("#city-input");
form.addEventListener("submit", cityFn);

document.querySelector("#city-input").addEventListener("submit", inputFn);
function inputFn(event) {
  event.preventDefault();

  let query = document.querySelector("#cityName").value; // Get the input value
  let apiKey = "694b5c6135cad6febfb0969t43a765co";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(weatherFn);
}
function weatherFn(response) {
  console.log(response.data);
  let temperature = document.querySelector("#currentTemp");
  let daytime = document.querySelector("#day-time");
  let currentHumid = document.querySelector("#humid");
  let description = document.querySelector("#description");
  let windSpeed = document.querySelector("#windSpeed");
  let icon = document.querySelector("#icon");
  let date = new Date(response.data.time * 1000);
  let time = document.querySelector("#day-time");

  time.innerHTML = dayTime(date);
  temperature.innerHTML = Math.round(response.data.temperature.current);
  currentHumid.innerHTML = response.data.temperature.humidity;
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
  description.innerHTML = `, ${response.data.condition.description}`;
  daytime.innerHTML = dayTime(date);
  icon.innerHTML = `<img
                src= ${response.data.condition.icon_url}
                class="current-weather-icon"
            />`;
}

function dayTime(date) {
  let hour = date.getHours();
  let minute = date.getMinutes();
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Satudray",
  ];
  let day = days[date.getDay()];
  return `${day} ${hour}:${minute}`;
}

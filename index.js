function searchInput(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#cityName");
  inputFn(cityInput.value);
}
let form = document.querySelector("#city-form");
form.addEventListener("submit", searchInput);

function inputFn(city) {
  let apiKey = "694b5c6135cad6febfb0969t43a765co";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(weatherFn);
}
function weatherFn(response) {
  console.log(response.data);
  let city = document.querySelector("#city");
  let temperature = document.querySelector("#currentTemp");
  let daytime = document.querySelector("#day-time");
  let currentHumid = document.querySelector("#humid");
  let description = document.querySelector("#description");
  let windSpeed = document.querySelector("#windSpeed");
  let icon = document.querySelector("#icon");
  let date = new Date(response.data.time * 1000);
  let time = document.querySelector("#day-time");

  city.innerHTML = response.data.city;
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
inputFn("canberra");

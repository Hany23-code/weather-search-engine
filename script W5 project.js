function DayFn() {
  let day = document.querySelector("#weekday");
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Satudray",
  ];
  day.innerHTML = days[now.getDay()];
}
DayFn();

function timeFn() {
  let time = document.querySelector("#currentTime");
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }

  time.innerHTML = `${hour}:${minute}`;
}
timeFn();
function cityFn(event) {
  event.preventDefault();
  let city = document.querySelector("#cityName");
  let valueCity = city.value;

  let h1 = document.querySelector("h1");
  h1.innerHTML = `${valueCity}`;
}
let form = document.querySelector("#city-input");
form.addEventListener("submit", cityFn);

// temperature and wind and humidity forecast

document.querySelector("#city-input").addEventListener("submit", inputFn);
function inputFn(event) {
  event.preventDefault();

  let query = document.querySelector("#cityName").value; // Get the input value
  let apiKey = "694b5c6135cad6febfb0969t43a765co";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(tempFn);
}
function tempFn(response) {
  console.log(response.data);
  let temp = Math.round(response.data.temperature.current);
  let humid = response.data.temperature.humidity;
  let wind = Math.round(response.data.wind.speed);

  //let currentTemp = document.querySelector("#currentTemp");
  //currentTemp.innerHTML = temp;
  document.querySelector("#currentTemp").innerHTML = temp;
  let currentHumid = document.querySelector("#humid");
  currentHumid.innerHTML = humid; // document.querySelector("#humid").innerHTML = humid;
  let windSpeed = document.querySelector("#windSpeed");
  windSpeed.innerHTML = wind; // document.querySelector("#windSpeed").innerHTML = wind;
}

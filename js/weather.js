const API_KEY = "2200441e5f15b03bbef0df2ab9a27da9";

function onGeoOk(position) {
  const latitude = position.coords.latitude; 
  const longitude = position.coords.longitude; 
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector("#weatherContainer span:first-child");
    const city = document.querySelector("#weatherContainer span:last-child");
    weather.innerText = `${data.weather[0].main}${data.main.temp}degrees`;
    city.innerText = data.name;
  });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
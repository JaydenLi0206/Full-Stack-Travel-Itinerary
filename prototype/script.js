const form = document.querySelector("form");
const weatherDiv = document.querySelector("#weather");
const apiKey = require("./config.js");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = form.elements.city.value;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      const weather = data.weather[0].main;
      const temp = data.main.temp;
      const feelsLike = data.main.feels_like;

      weatherDiv.innerHTML = `
				<p>Weather: ${weather}</p>
				<p>Temperature: ${temp} &deg;C</p>
				<p>Feels Like: ${feelsLike} &deg;C</p>
			`;
    })
    .catch((error) => console.log(error));
});

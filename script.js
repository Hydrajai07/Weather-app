const apiKey = "418171a4906594cce5137c17ddd19967"; 

document.getElementById("searchBtn").addEventListener("click", function () {
  const city = document.getElementById("cityInput").value.trim();
  const weatherBox = document.getElementById("weatherResult");
  const errorMsg = document.getElementById("errorMsg");

  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;
  console.log("URL:", url);

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("cityName").textContent = data.name;
      document.getElementById("temp").textContent = data.main.temp;
      document.getElementById("desc").textContent = data.weather[0].description;
      document.getElementById("humidity").textContent = data.main.humidity;
      document.getElementById("wind").textContent = data.wind.speed;

      weatherBox.classList.remove("hidden");
      errorMsg.classList.add("hidden");
    })
    .catch((error) => {
      weatherBox.classList.add("hidden");
      errorMsg.classList.remove("hidden");
    });
});

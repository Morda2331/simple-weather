async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "61b4fe80ed0f28e826bdb8f297630842";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      const result = `
        <p><strong>${data.name}</strong></p>
        <p>Температура: ${data.main.temp}°C</p>
        <p>Погода: ${data.weather[0].description}</p>
      `;
      document.getElementById("weatherResult").innerHTML = result;
    } else {
      document.getElementById("weatherResult").innerHTML = "Город не найден.";
    }
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = "Ошибка при получении данных.";
  }
}

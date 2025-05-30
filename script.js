async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = const apiKey = "61b4fe80ed0f28e826bdb8f297630842";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Город не найден");
    }
    const data = await response.json();
    const result = `
      Город: ${data.name}<br>
      Температура: ${data.main.temp}°C<br>
      Погода: ${data.weather[0].description}
    `;
    document.getElementById("result").innerHTML = result;
  } catch (error) {
    document.getElementById("result").innerHTML = error.message;
  }
}

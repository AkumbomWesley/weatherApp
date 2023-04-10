document.getElementById('weatherForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get user input
  const city = document.getElementById('cityInput').value;
  
  // Clear previous weather information
  document.getElementById('temperature').textContent = '';
  document.getElementById('description').textContent = '';
  document.getElementById('humidity').textContent = '';
  document.getElementById('error').textContent = '';

  // Fetch weather data from API
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c030f3b55226b91f3fed934e20930b19&units=metric`)
    .then(response => {
      if (!response.ok) {
        throw new Error('City not found. Please try again.');
      }
      return response.json();
    })
    .then(data => {
      // Update weather information
      document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
      document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
      document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    })
    .catch(error => {
      document.getElementById('error').textContent = error.message;
    });
});


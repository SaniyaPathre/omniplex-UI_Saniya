import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
    'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY' // Replace with your key
  }
});

export const fetchWeather = async (city) => {
  try {
    const response = await apiClient.get('', {
      params: { q: city, units: 'metric' }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};

import { url } from "./url"; 

export const fetchWeatherByCity = async (
  city: string,
  API_KEY: string,
  units: string
) => {
  try {
    const response = await fetch(
      `${url.searchWeather(city, units)}&appid=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Şəhər tapılmadı");
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    throw new Error("Xəta baş verdi: " + error);
  }
};

export const fetchCurrentWeather = async (
  lat: number,
  lon: number,
  units: string,
  API_KEY: string
) => {
  try {
    const response = await fetch(
      `${url.currentWeather(lat, lon, units)}&appid=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Hava məlumatlarını ala bilmədik");
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    throw new Error("Xəta baş verdi: " + error);
  }
};
export const fetchForecastByCity = async (
  lat: number,
  lon: number,
  API_KEY: string,
  units: string,
) => {
  try {
    console.log(units);
    
    const response = await fetch(
      `${url.forecast(lat, lon, units)}&appid=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Şəhər tapılmadı");
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    throw new Error("Xəta baş verdi: " + error);
  }
};

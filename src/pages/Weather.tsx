import React, { useEffect, useState } from "react";
import { getLocation } from "../services/locationService";
import { fetchForecastByCity, fetchWeatherByCity } from "../services/api";
import { groupForecastByDay } from "../services/forecastFunc";

interface WeatherData {
  main: {
    temp: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  name: string;
  sys: {
    country: string;
  };
  coord: {
    lat: number;
    lon: number;
  };
}

interface HourlyData {
  time: string;
  temp: number;
  description: string;
  icon: string;
}

interface ForecastData {
  [day: string]: HourlyData[];
}

const Weather: React.FC = () => {
  const [city, setCity] = useState<string>(""); // Şəhər adını saxlamaq üçün state
  const [weather, setWeather] = useState<WeatherData | null>(null); // Hava məlumatlarını saxlamaq üçün state
  const [loading, setLoading] = useState<boolean>(false); // Yüklənmə vəziyyəti
  const [error, setError] = useState<string | null>(null); // Xətanı saxlamaq üçün state
  const [forecastData, setForecastData] = useState<ForecastData>({}); // forecastData-nı obyekt kimi təyin edirik
  const [isCelsius, setIsCelsius] = useState<boolean>(true); // Temperatur vahidi seçimi
  const [units, setUnits] = useState<string>("metric"); // Temperatur vahidinin metrik və ya imperiyal olması
  const API_KEY = "62553053bb84aba9f01ecf8c4fb26216";
  const searchWeather = async () => {
    setLoading(true);
    setError(null);
    setWeather(null);
    setForecastData({});
    try {
      const data = await fetchWeatherByCity(city, API_KEY, units);
      console.log(data);
      setForecastData({});
      if (data) {
        const forecastResponse = await fetchForecastByCity(
          data?.coord?.lat,
          data?.coord?.lon,
          API_KEY,
          units
        );
        console.log(forecastResponse);
        const newData = groupForecastByDay(forecastResponse);
        setForecastData(newData);
      }
      setWeather(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Naməlum xəta baş verdi");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (weather) {
      searchWeather();
    }
  }, [units]);

  useEffect(() => {
    getLocation(
      setWeather,
      setError,
      setLoading,
      fetchForecastByCity,
      groupForecastByDay,
      setForecastData,
      setCity,
      API_KEY
    );
  }, []);

  const capitalizeFirstLetter = (word: string): string => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Weather Data Search</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter the city name"
      />
      <button onClick={searchWeather}>Search</button>

      <div style={{ margin: "20px 0" }}>
        <button
          onClick={() => {
            setUnits("metric");
            setIsCelsius(true);
          }}
          disabled={isCelsius}
        >
          Selsi
        </button>
        <button
          onClick={() => {
            setUnits("imperial");
            setIsCelsius(false);
          }}
          disabled={!isCelsius}
        >
          Fahrenheit
        </button>
      </div>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div>
          <img
            src={`/weather-app-react-ts/images/${weather.weather[0].icon}.png`}
            width="64"
            height="64"
            alt={weather.weather[0].description}
          />
          <h2>
            {weather.name}, {capitalizeFirstLetter(weather.sys.country)} weather
          </h2>
          <p>
            Temperatur:{" "}
            {isCelsius ? `${weather.main.temp}°C` : `${weather.main.temp}°F`}
          </p>
          <p>Description: {weather.weather[0].description}</p>
        </div>
      )}

      {Object.keys(forecastData).length > 0 && (
        <div>
          <h2>5 Günlük Hava Proqnozu</h2>
          {Object.keys(forecastData).map((day: string, index: number) => (
            <div
              key={index}
              style={{
                marginBottom: "20px",
                border: "1px solid gray",
                padding: "10px",
              }}
            >
              <h3>{day}</h3>
              <div className="forecast-container">
                {forecastData[day].map((hour: HourlyData, i: number) => (
                  <div
                    key={i}
                    style={{ marginBottom: "10px", border: "1px solid black" }}
                  >
                    <p>Saat: {hour.time}</p>
                    <img
                      src={`/weather-app-react-ts/images/${hour.icon}.png`}
                      width="40"
                      height="40"
                      alt={hour.description}
                    />
                    <p>Temperatur: {hour.temp}</p>
                    <p>Təsvir: {capitalizeFirstLetter(hour.description)}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Weather;

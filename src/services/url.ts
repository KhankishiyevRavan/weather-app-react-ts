export const url = {
  currentWeather(lat: number, lon: number, units: string): string {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}`;
  },
  forecast(lat: number, lon: number,units:string): string {
    return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}`;
  },
  airPollution(lat: number, lon: number): string {
    return `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}`;
  },
  reverseGeo(lat: number, lon: number): string {
    return `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5`;
  },

  geo(query: string, units: string): string {
    return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&units=${units}`;
  },

  searchWeather(city: string, units: string): string {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}`;
  },
};

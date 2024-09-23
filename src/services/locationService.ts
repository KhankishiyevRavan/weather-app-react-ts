export const getLocation = (
  setWeather: any,
  setError: any,
  setLoading: any,
  fetchForecastByCity: any,
  groupForecastByDay: any,
  setForecastData: any,
  setCity: any,
  units: string,
  API_KEY: string
) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
          );

          if (!response.ok) {
            throw new Error("Hava məlumatlarını ala bilmədik.");
          }

          const data = await response.json();
          setWeather(data);
          setCity(data.name);

          if (data) {
            const forecastResponse = await fetchForecastByCity(
              data?.coord?.lat,
              data?.coord?.lon,
              API_KEY,
              units
            );

            const newData = groupForecastByDay(forecastResponse);
            setForecastData(newData);
          }
          setError(null);
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError("Xəta baş verdi.");
          }
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        setError("Mövqeyinizi təyin etmək mümkün olmadı.");
        setLoading(false);
      }
    );
  } else {
    setError("Geolocation dəstəklənmir.");
    setLoading(false);
  }
};

export const groupForecastByDay = (forecastData: any) => {
  const days: any = {};

  // Saatlıq məlumatları günlərə görə qruplaşdırırıq
  forecastData.list.forEach((entry: any) => {
    const date = new Date(entry.dt * 1000);
    const day = date.toISOString().split("T")[0]; // Yalnız gün məlumatını alırıq

    if (!days[day]) {
      days[day] = []; // Hər gün üçün saatlıq məlumatları saxlayacağımız massiv
    }

    // Hər saatlıq məlumatı həmin günün massivinə əlavə edirik
    days[day].push({
      time: date.toTimeString().split(" ")[0], // Saatı almaq üçün
      temp: entry.main.temp,
      description: entry.weather[0].description,
      icon: entry.weather[0].icon,
      humidity: entry.main.humidity,
      wind: {
        speed: entry.wind.speed,
        deg: entry.wind.deg,
      },
    });
  });

  return days;
};

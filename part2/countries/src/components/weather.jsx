const WeatherData = ({ weather }) => {
  const linkToIcon = `http://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`;

  return (
    <div>
      <p>Temperature: {weather.data.main.temp} Celsius</p>
      <img src={linkToIcon} />
      <p>wind: {weather.data.wind.speed} m/s </p>
    </div>
  );
};

export default WeatherData;

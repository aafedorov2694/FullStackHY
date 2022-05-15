import WeatherData from "./weather";

const DetailedCountry = ({ foundCountries, weather }) => {
  let languages = [];
  const passedWeather = weather;
  const countryDetails = foundCountries[0];
  console.log("weather in detailed: ", passedWeather);
  for (const [key, val] of Object.entries(countryDetails.languages)) {
    languages.push(val);
  }

  if (weather != undefined) {
    return (
      <div>
        <h1>{countryDetails.name.common}</h1>
        <p>capital {countryDetails.capital[0]}</p>
        <p>area {countryDetails.area}</p>
        <h3>laguages:</h3>
        {languages.map((e) => (
          <ul>
            <li>{e}</li>
          </ul>
        ))}
        <img src={countryDetails.flags.png} />

        <WeatherData weather={weather} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>{countryDetails.name.common}</h1>
        <p>capital {countryDetails.capital[0]}</p>
        <p>area {countryDetails.area}</p>
        <h3>laguages:</h3>
        {languages.map((e) => (
          <ul>
            <li>{e}</li>
          </ul>
        ))}
        <img src={countryDetails.flags.png} />
      </div>
    );
  }
};

export default DetailedCountry;

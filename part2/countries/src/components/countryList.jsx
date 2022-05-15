import DetailedCountry from "./detailedCountry";
import WeatherData from "./weather";

const CountryList = (props) => {
  let foundCountries = props.foundCountries;
  const setFoundCountries = props.setFoundCountries;
  const setLatLng = props.setLatLng;
  const weather = props.weather;
  let oneChosenC = [];
  let lat = props.lat;
  let lng = props.lng;

  const selectOnPress = (c) => {
    foundCountries.forEach((e) => {
      if (e.ccn3 === c.ccn3) {
        oneChosenC.push(e);
      }
    });
    lat = foundCountries[0].capitalInfo.latlng[0];
    lng = foundCountries[0].capitalInfo.latlng[1];
    // console.log('lat: ',foundCountries[0].capitalInfo.latlng[0], 'lng: ', foundCountries[0].capitalInfo.latlng[1])
    setFoundCountries(oneChosenC);
  };

  if (foundCountries.length <= 10 && foundCountries.length > 1) {
    return (
      <div>
        {foundCountries.map((e, i) => (
          <ul>
            <li key={i}>
              {e.name.common}{" "}
              <button onClick={() => selectOnPress(e)}>show </button>
            </li>
          </ul>
        ))}
      </div>
    );
  } else if (foundCountries.length === 1) {
    setLatLng(foundCountries[0].capitalInfo.latlng);
    return (
      <div>
        <DetailedCountry foundCountries={foundCountries} weather={weather} />
      </div>
    );
  } else {
    return (
      <div>
        <p>Too many options</p>
      </div>
    );
  }
};

export default CountryList;

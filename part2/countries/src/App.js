import { useEffect, useState } from "react";
import axios from 'axios';
import CountryInput from "./components/countryInput";
import CountryList from "./components/countryList";
function App() {

  const [countryName, setCountryName] = useState([]);
  const [foundCountries, setFoundCountries] = useState([]);
  const [weather, setWeather] = useState();
  const [latLng, setLatLng] = useState([])

  const api_key = process.env.REACT_APP_NOT_SECRET_CODE
  useEffect(() => {
    let arr = [];

    axios.get('https://restcountries.com/v3.1/all')
      .then(res => {

        arr = res.data.map(e => {
          return e
        });
        setCountryName(arr)
      })
      .catch(e => console.log('Axios error', e))


    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latLng[0]}&lon=${latLng[1]}&appid=${api_key}&units=metric`)
      .then(resp => {
        setWeather(resp)
      })
      .catch(e => console.log('Axios error', e))


  }, [latLng])


  console.log('found countries: ', foundCountries)

  return (
    <div>
      <CountryInput setFoundCountries={setFoundCountries} countryName={countryName} foundCountries={foundCountries} />
      <CountryList
        countryName={countryName}
        foundCountries={foundCountries}
        setFoundCountries={setFoundCountries}
        latLng={latLng}
        setLatLng={setLatLng}
        weather={weather}

      />

    </div>
  );


}

export default App;

import {useEffect, useState} from "react";
import axios from 'axios';
import CountryInput from "./components/countryInput";
import CountryList from "./components/countryList";
function App() {
  
  const[countryName, setCountryName] = useState([]);
  const [foundCountries, setFoundCountries] = useState([]);
  
  useEffect(() => { 
    let arr = [];
    axios.get('https://restcountries.com/v3.1/all')
      .then(res => {
         
        arr = res.data.map(e => {
          return e.name.common
        });
        setCountryName(arr)
        
      })
      .catch(e => console.log('Axios error', e))
      
    }, [])
    console.log('country name: ', countryName)
    
  
  return (
    <div>
      <CountryInput  setFoundCountries={setFoundCountries} countryName = {countryName} foundCountries = {foundCountries}  />
      <CountryList  countryName = {countryName} foundCountries = {foundCountries} setFoundCountries={setFoundCountries}/>
    </div>
  );
}

export default App;

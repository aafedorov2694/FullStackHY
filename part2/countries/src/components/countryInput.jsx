import React from "react";

const CountryInput = (props) => {
   
    const {
        countryName,
        setFoundCountries
    } = props;
    let selectedCountries = []
    let uploadCheck = Boolean
    const search = (event) => {
       let target = event.target.value;
        selectedCountries = countryName.filter(country => {
            if(country.toLowerCase().includes(event.target.value) === true){
               return country;
           }
        })
        
        setFoundCountries(selectedCountries);
        console.log('countryName.length: ', countryName.length)
        console.log('event target value: ', target)
    }
    
    countryName.length === 0 ? uploadCheck = true : uploadCheck = false

   
   
    return(
        <div>
            <p>find country: <input placeholder="Type country name" onChange ={search} disabled ={uploadCheck}  /> </p>
        </div>
    )
}

export default CountryInput;
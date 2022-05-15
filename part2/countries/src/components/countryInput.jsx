import React from "react";

const CountryInput = (props) => {
  const { countryName, setFoundCountries } = props;
  let selectedCountries = [];
  let uploadCheck = Boolean;
  const search = (event) => {
    event.preventDefault();
    console.log("event: ", event.target.value.toLowerCase());
    selectedCountries = countryName.filter((country) => {
      if (
        country.name.common
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) === true
      ) {
        return country;
      }
    });

    setFoundCountries(selectedCountries);
  };

  countryName.length === 0 ? (uploadCheck = true) : (uploadCheck = false);

  return (
    <div>
      <p>
        find country:{" "}
        <input
          placeholder="Type country name"
          onChange={search}
          disabled={uploadCheck}
        />{" "}
      </p>
    </div>
  );
};

export default CountryInput;

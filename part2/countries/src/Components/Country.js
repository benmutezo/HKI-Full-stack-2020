import React, { useState } from "react";

const Country = ({ countries, searchField, weather, capital }) => {
  const numberOfCountries = countries.length;
  const [showsDetails, setShowsDetails] = useState(false);
  const [countryName, setCountryName] = useState("");

  const showMore = (name) => {
    countries.forEach((country) => {
      if (country.name.includes(name)) {
        setShowsDetails(!showsDetails);
        setCountryName(country.name);
      }
    });
  };

  return (
    <div>
      {!searchField ? (
        <p>Start searching...</p>
      ) : numberOfCountries > 10 ? (
        <p>Too many matches, please be more specific</p>
      ) : numberOfCountries <= 10 && numberOfCountries > 1 ? (
        countries.map((country) => (
          <div key={country.name}>
            <p>
              {country.name}
              <button onClick={() => showMore(country.name)}>show</button>
            </p>
            {showsDetails && country.name.includes(countryName) ? (
              <div key={country.name}>
                <h1>{country.name}</h1>
                <div>
                  <p>capital {country.capital}</p>
                  <p>population {country.population}</p>
                </div>
                <div>
                  <ul>
                    {country.languages.map((lang) => (
                      <li key={lang.name}>{lang.name}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <img
                    style={{ height: 200, width: 400 }}
                    alt="National flag"
                    src={country.flag}
                  />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        ))
      ) : (
        countries.map((country) => (
          <div key={country.name}>
            <h1>{country.name}</h1>
            <div>
              <p>capital {country.capital}</p>
              <p>population {country.population}</p>
            </div>
            <div>
              <h1>spoken languages</h1>
              <ul>
                {country.languages.map((lang) => (
                  <li key={lang.name}>{lang.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <img
                style={{ height: 200, width: 400 }}
                alt="National flag"
                src={country.flag}
              />
            </div>
            <div>
              <h1>Weather in {capital}</h1>
              <p>temperature: {weather.temperature}℃</p>
              <p>
                Wind {weather.wind_speed} mph direction {weather.wind_dir}{" "}
              </p>
              <img alt="weather icon" src={weather.weather_icons} />
              <p>{weather.weather_descriptions}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Country;

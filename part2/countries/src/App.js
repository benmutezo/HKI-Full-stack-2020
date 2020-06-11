import React, { useState, useEffect } from "react";
import Search from "./Components/Search";
import Country from "./Components/Country";
import axios from "axios";

const App = () => {
  //API

  const API_KEY = "54f2ed03a458debca70d2db0c759ba02";

  const URL = "https://restcountries.eu/rest/v2/all";
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearch] = useState("");
  const [weather, setWeather] = useState([]);
  const [capital, setCapital] = useState("");
  const hook = () => {
    axios.get(URL).then((res) => {
      setCountries(res.data);
    });
  };

  useEffect(hook, []);

  const filter = countries.filter((country) =>
    country.name.toLowerCase().includes(searchCountry.toLowerCase())
  );

  useEffect(() => {
    if (filter.length === 1) {
      setCapital(filter[0].capital);
    }
  }, [filter]);

  useEffect(() => {
    if (capital) {
      axios
        .get(
          `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${capital}`
        )
        .then((res) => {
          setWeather(res.data.current);
          console.log("done", res);
        });
    }
  }, [capital]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <Search handleSearch={handleSearch} />
      <Country
        weather={weather}
        countries={filter}
        capital={capital}
        searchField={searchCountry}
      />
    </div>
  );
};

export default App;

import { useState, useEffect, useContext } from 'react';
import CountryCard from './CountryCard';
import './App.css';
import { MyContext } from './CountriesDataProvider';

// import React from 'react';

// const ThemeContext = React.createContext("light");

function App() {
  const { data } = useContext(MyContext);

  let [inputValue, setInputValue] = useState({
    searchValue: '',
    region: '',
    selection: [],
  });

  // useEffect(() => {
  //   filterCountries();
  // }, [inputValue.searchValue, inputValue.region]);

  const regions = [
    'All',
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];
  function handleRegionChange(e: any) {
    setInputValue({ ...inputValue, region: e.target.value });
  }

  function filterCountries() {
    console.log(
      '🚀 ~ file: App.tsx:2 ~ filterCountries ~ inputValue',
      inputValue
    );
    let { searchValue, region } = inputValue;
    let selectedCountries: [] = [];

    if (region && region !== 'All') {
      let selectedCountries = data
        ? data.filter((country: any) => {
            return country.region.toLowerCase() === region.toLowerCase();
          })
        : [];
      if (searchValue !== '') {
        selectedCountries = selectedCountries.filter((country: any) =>
          country.name.common.toLowerCase().includes(searchValue)
        );
      }
    } else {
      selectedCountries = data
        ? data.filter((country: any) =>
            country.name.common.toLowerCase().includes(searchValue)
          )
        : [];
    }
    console.log(data, selectedCountries);
    setInputValue({ ...inputValue, selection: selectedCountries });
  }

  return (
    <>
      <header>HEADER WITH DARK MODE SELECTOR</header>{' '}
      <select value={inputValue.region} onChange={handleRegionChange}>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
      {data ? (
        <section>
          {' '}
          {inputValue.selection.length
            ? inputValue.selection.map((country: object) => (
                <CountryCard country={{ ...country }} />
              ))
            : data.map((country: object) => (
                <CountryCard country={{ ...country }} />
              ))}
        </section>
      ) : (
        <div> Loading...</div>
      )}
    </>
  );
}

export default App;

//Add logic for a search that returns nothing

import { useState, useEffect, useContext } from 'react';
import CountryCard from './CountryCard';
import './App.css';
import { MyContext } from './CountriesDataProvider';

// import React from 'react';

// const ThemeContext = React.createContext("light");

function App() {
  const { data } = useContext(MyContext);

  const [inputValue, setInputValue] = useState({
    searchValue: '',
    region: '',
    selection: [],
  });
  const [searchSelection, setSearchSelection] = useState([]);

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
    filterCountries(e.target.value, inputValue.searchValue);
  }

  function handleSearchinput(e: any) {
    setInputValue({ ...inputValue, searchValue: e.target.value });
    filterCountries(inputValue.region, e.target.value);
  }

  function filterCountries(region: string, searchValue: string = '') {
    let selectedCountries: any = [];

    if (region && region !== 'All') {
      selectedCountries = data
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
    console.log(selectedCountries);
    setSearchSelection(selectedCountries);
  }

  return (
    <>
      <header>HEADER WITH DARK MODE SELECTOR</header>{' '}
      <input
        value={inputValue.searchValue}
        onChange={handleSearchinput}
      ></input>
      <select value={inputValue.region} onChange={handleRegionChange}>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
      {!searchSelection.length && inputValue.searchValue ? (
        <div>No Countries Found</div>
      ) : data ? (
        <section>
          {searchSelection.length
            ? searchSelection.map((country: object) => (
                <CountryCard country={{ ...country }} />
              ))
            : data.map((country: object, index: number) => (
                <CountryCard country={{ ...country }} key={index} />
              ))}
        </section>
      ) : (
        <div> Loading...</div>
      )}
    </>
  );
}

export default App;

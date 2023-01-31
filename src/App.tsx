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

  const regions = [
    'All',
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  function filterCountries() {
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
    setInputValue({ ...inputValue, selection: selectedCountries });
  }

  return (
    <>
      <header>HEADER WITH DARK MODE SELECTOR</header>{' '}
      {data ? (
        <section>
          {' '}
          {data.map((country: object) => (
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

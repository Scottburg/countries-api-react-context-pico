import { useState, useEffect, useContext } from 'react';
import CountryCard from './CountryCard';
import './App.css';
import { MyContext } from './CountriesDataProvider';

// import React from 'react';

// const ThemeContext = React.createContext("light");

function App() {
  const { data } = useContext(MyContext);

  let [inputValue, setInputValue] = useState({ searchValue: '', region: '' });

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

    if (region && region !== 'All') {
      let filteredSelection = data
        ? data.filter((country: any) => {
            return country.region.toLowerCase() === region.toLowerCase();
          })
        : [];
      if (searchValue !== '') {
        filteredSelection = filteredSelection.filter((country: any) =>
          country.name.common.toLowerCase().includes(searchValue)
        );
      }
      selectedCountries = filteredSelection;
    } else {
      selectedCountries = data.filter((country: any) =>
        country.name.common.toLowerCase().includes(searchValue)
      );
    }
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

import { useState, useEffect, useContext } from 'react';
import CountryCard from './CountryCard';
import './App.css';
import { MyContext } from './CountriesDataProvider';

// import React from 'react';

// const ThemeContext = React.createContext("light");

function App() {
  const [countries, setCountries] = useState([]);

  // useEffect(() => {
  //   console.log('useEffect called');
  //   apiCall();
  // }, []);

  const apiCall = async () => {
    console.log('apiCall called');
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    console.log(data);
    setCountries(data);
  };

  const { data } = useContext(MyContext);

  const regions = [
    'All',
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  return (
    <>
      <header>HEADER WITH DARK MODE SELECTOR</header>{' '}
      {/* <section>API results. {data}</section>{' '} */}
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

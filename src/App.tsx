import { useState, useContext } from 'react';
import CountryCard from './Components/CountryCard/CountryCard';
import './App.scss';
import { MyContext } from './CountriesDataProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
      <div className="search-input-bar">
        <div className="text-search-field">
          <label>
            <FontAwesomeIcon icon={faSearch} />
          </label>
          <input
            value={inputValue.searchValue}
            onChange={handleSearchinput}
            placeholder="Search for a country..."
          ></input>
        </div>

        <div className="drop-down-select">
          <select
            value={inputValue.region}
            onChange={handleRegionChange}
            placeholder="Search for a Country"
          >
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>
      </div>
      {!searchSelection.length && inputValue.searchValue ? (
        <div>No Countries Found</div>
      ) : data ? (
        <section className="cards-container">
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

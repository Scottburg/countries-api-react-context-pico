import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from './main';
import { MyContext } from './CountriesDataProvider';

function CountryDetails(country: any) {
  let params = useParams();
  console.log(params.countryid);

  const theme = useContext(ThemeContext);
  const { data } = useContext(MyContext);
  console.log('🚀 ~ file: CountryDetails.tsx:12 ~ CountryDetails ~ data', data);

  return (
    <div className="country-card">
      <div>
        {params.countryid}
        {/* {{ ...data }} */}
        {theme}
      </div>
      <img src={country.flag} alt="flag" />
      <div className="country-card__details">
        <h2>{country.name}</h2>
        <p>
          <strong>Population:</strong> {country.population}
        </p>
        <p>
          <strong>Region:</strong> {country.region}
        </p>
        <p>
          <strong>Capital:</strong> {country.capital}
        </p>
      </div>
    </div>
  );
}

export default CountryDetails;

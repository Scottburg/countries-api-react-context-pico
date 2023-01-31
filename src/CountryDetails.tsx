import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from './main';
import { MyContext } from './CountriesDataProvider';
import { Link } from 'react-router-dom';

function CountryDetails(country: any) {
  let params = useParams();
  console.log(params.countryid);

  const theme = useContext(ThemeContext);
  const { data }: any = useContext(MyContext);
  console.log('🚀 ~ file: CountryDetails.tsx:12 ~ CountryDetails ~ data', data);
  const countryDetails: any = data.find(
    (country: any) => country.cca3 === params.countryid
  );

  const getCountryNameFromCCA3 = (cca3: string) => {
    let res = data.find((country: any) => country.cca3 === cca3);
    return res ? res.name.common : '';
  };

  //TODO error checking if data is not on context

  return (
    <div className="country-card">
      <div>
        {params.countryid}
        {/* {{ ...data }} */}
        {theme}
      </div>
      <img src={country.flag} alt="flag" />
      <div className="country-card__details">
        <h2>{countryDetails.name.common}</h2>
        <p>
          <strong>Population:</strong> {country.population}
        </p>
        <p>
          <strong>Region:</strong> {country.region}
        </p>
        <p>
          <strong>Capital:</strong> {country.capital}
        </p>
        <section>
          Borders:
          <div>
            {countryDetails.borders ? (
              countryDetails.borders.map((border: string) => (
                <Link to={`/country/${border}`}>
                  <div> {getCountryNameFromCCA3(border)}</div>
                </Link>
              ))
            ) : (
              <div>No Land borders</div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default CountryDetails;

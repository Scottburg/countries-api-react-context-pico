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
      <img src={countryDetails.flags.png} alt="flag" />
      <div className="country-card__details">
        <h2>{countryDetails.name.common}</h2>
        <span>Native Name: {countryDetails.name.common.nativeName}</span>
        <span>Sub Region: {countryDetails.name.common.nativeName}</span>
        <p>
          <strong>Native Name:</strong> {countryDetails.population}
        </p>
        <p>
          <strong>Population:</strong>{' '}
          {countryDetails.population.toLocaleString()}
        </p>
        <p>
          <strong>Capital:</strong> {countryDetails.capital[0]}
        </p>
        <p>
          <strong>Region:</strong> {countryDetails.region}
        </p>
        <p>
          <strong>Sub Region:</strong> {countryDetails.subregion}
        </p>
        {/* <p>
          <strong>Top Level Domain:</strong> {countryDetails.tld[0]}
        </p>
        <p>
          <strong>Currencies:</strong> {countryDetails.capital}
        </p>
        <p>
          <strong>Capital:</strong> {countryDetails.capital}
        </p>
        <p>
          <strong>Languages:</strong> {countryDetails.capital}
        </p> */}
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

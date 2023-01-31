import { Link } from 'react-router-dom';

function CountryCard(country: any) {
  console.log(
    '🚀 ~ file: CountryCard.tsx:2 ~ CountryCard ~ country',
    country.country
  );
  const countryDetails = country.country;

  return (
    <>
      {country && (
        <Link to={`/country/${countryDetails.cca3}`}>
          <div className="country-card">
            <img src={`${countryDetails.flags.png}`} alt="flag" />
            <div className="country-card__details">
              <h2>{countryDetails?.name?.common}</h2>
              <p>
                <strong>Population:</strong> {countryDetails.population}
              </p>
              <p>
                <strong>Region:</strong> {countryDetails.region}
              </p>
              <p>
                <strong>Capital:</strong> {countryDetails.capital}
              </p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}

export default CountryCard;

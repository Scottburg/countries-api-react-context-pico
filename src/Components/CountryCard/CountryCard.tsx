import { Link } from 'react-router-dom';
import './countryCard.scss';

function CountryCard(country: any) {
  const countryDetails = country.country;

  return (
    <>
      {country && (
        <Link to={`/country/${countryDetails.cca3}`}>
          <article className="country-card">
            <div className="img-container">
              <img src={`${countryDetails.flags.png}`} alt="flag" />
            </div>
            <div className="country-card-details">
              <h3>{countryDetails?.name?.common}</h3>
              <p>
                <strong>Population:</strong>{' '}
                {countryDetails.population.toLocaleString()}
              </p>
              <p>
                <strong>Region:</strong> {countryDetails.region}
              </p>
              <p>
                <strong>Capital:</strong>{' '}
                {Array.isArray(countryDetails.capital)
                  ? countryDetails.capital[0]
                  : countryDetails.capital}
              </p>
            </div>
          </article>
        </Link>
      )}
    </>
  );
}

export default CountryCard;

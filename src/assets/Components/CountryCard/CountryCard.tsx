import { Link } from 'react-router-dom';
import './countryCard.scss';

function CountryCard(country: any) {
  const countryDetails = country.country;

  return (
    <>
      {country && (
        <Link to={`/country/${countryDetails.cca3}`}>
          <article className="country-card">
            <img src={`${countryDetails.flags.png}`} alt="flag" />
            <div className="country-card-details">
              <h2>{countryDetails?.name?.common}</h2>
              <p>
                <strong>Population:</strong>{' '}
                {countryDetails.population.toLocaleString()}
              </p>
              <p>
                <strong>Region:</strong> {countryDetails.region}
              </p>
              <p>
                <strong>Capital:</strong> {countryDetails.capital}
              </p>
            </div>
          </article>
        </Link>
      )}
    </>
  );
}

export default CountryCard;

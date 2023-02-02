import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../../CountriesDataProvider';
import { Link } from 'react-router-dom';
import './countryDetails.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function CountryDetails(country: any) {
  let params = useParams();
  console.log(params.countryid);

  const { data }: any = useContext(MyContext);
  const countryData: any = data.find(
    (country: any) => country.cca3 === params.countryid
  );

  const getCountryNameFromCCA3 = (cca3: string) => {
    let res = data.find((country: any) => country.cca3 === cca3);
    return res ? res.name.common : '';
  };

  //TODO error checking if data is not on context

  return (
    <div className="country-details-container">
      <div className="home-button">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </Link>
      </div>
      <div className="country-details">
        <div className="image-wrapper">
          <img src={countryData.flags.png} alt="flag" />
        </div>
        <div className="country-text-details">
          <h2>{countryData.name.common}</h2>
          <p>
            <strong>Native Name:</strong>{' '}
            {
              countryData.name.nativeName[
                Object.keys(countryData.name.nativeName)[0]
              ].common
            }
          </p>

          <p>
            <strong>Population:</strong>{' '}
            {countryData.population.toLocaleString()}
          </p>
          <p>
            <strong>Capital:</strong>{' '}
            {countryData.capital.toString().replaceAll(',', ', ')}
          </p>
          <p>
            <strong>Region:</strong> {countryData.region}
          </p>
          <p>
            <strong>Sub Region:</strong> {countryData.subregion}
          </p>
          <p>
            <strong>Top Level Domain:</strong> {countryData.tld[0]}
          </p>
          <p>
            <strong>Currencies:</strong>{' '}
            {Object.keys(countryData.currencies)
              .map((el) => {
                return countryData.currencies[el].name;
              })
              .toString()
              .replaceAll(',', ', ')}
          </p>
          <p>
            <strong>Languages:</strong>{' '}
            {Object.keys(countryData.languages)
              .map((el) => countryData.languages[el])
              .toString()
              .replaceAll(',', ', ')}
          </p>
          <section>
            Border Countries:
            <div>
              {countryData.borders ? (
                countryData.borders.map((border: string) => (
                  <Link to={`/country/${border}`}>
                    <div className="country-button">
                      {' '}
                      {getCountryNameFromCCA3(border)}
                    </div>
                  </Link>
                ))
              ) : (
                <div>No Land borders</div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;

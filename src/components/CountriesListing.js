import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCountries } from '../store/countriesSlice';

const CountriesListing = () => {
  const countriesData = useSelector((state) => state.countries);

  const items = countriesData.countries;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  return (
    <div className="countries">
      <div className="card-group g-0">
        {items.map(({
          idx, name, flags, region, languages, population,
        }) => (
          <div className="card" key={idx}>
            <div className="d-flex justify-content-center align-items-center">
              <img src={flags.png} className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
              <div>
                <p className="card-title fw-bold">{name}</p>
                <p className="card-text text-uppercase region">{region}</p>
              </div>
              <div className="pt-3">
                <p className="card-text">
                  <span className="me-2">👨🏾‍🤝‍👨🏻</span>
                  {`${(population / 1000000).toFixed(1)}`}
                </p>
                <p className="card-text">
                  <span className="me-2">🗣</span>
                  {languages[0].name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountriesListing;

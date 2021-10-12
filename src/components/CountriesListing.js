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
          idx, name, flags, region,
        }) => (
          <div className="card" key={idx}>
            <div className="d-flex justify-content-center align-items-center"><img src={flags.png} className="card-img-top" alt="..." /></div>
            <div className="card-body">
              <h5 className="card-title fs-6 text-center fw-bold text-uppercase">{name.common}</h5>
              <p className="card-text">{region}</p>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default CountriesListing;

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchCountries } from '../store/countriesSlice';
import Header from './Header';

const CountriesListing = () => {
  const countriesData = useSelector((state) => state.countries);

  const items = countriesData.countries;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);

  console.log(output);

  useEffect(() => {
    setOutput([]);
    items.filter((country) => {
      if (country.region.toLowerCase().includes(input.toLowerCase())) {
        setOutput((output) => [...output, country]);
      }

      return output;
    });
  }, [input]);

  if (output.length === 0) {
    items.filter((country) => {
      setOutput((output) => [...output, country]);
      return output;
    });
  }

  const list = <input type="text" onChange={(e) => setInput(e.target.value)} className=" input-field mx-1" placeholder="Search by regions" />;
  return (
    <div>
      <Header content="Countries" search={list} />
      <div className="countries">
        <div className="card-group g-0">
          {output && output.map(({
            alpha2Code, name, flags, region, languages, population,
          }) => (
            <div className="card" key={alpha2Code}>
              <Link to={`/countries/${name}`}>
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
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default CountriesListing;

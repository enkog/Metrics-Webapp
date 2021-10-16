import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchCountries } from '../redux/countriesSlice';
import Header from './Header';

const CountriesListing = () => {
  const countriesState = useSelector((state) => state.countries);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  const countriesData = countriesState.countries ? countriesState.countries : countriesState;

  useEffect(() => {
    setOutput([]);
    countriesData.filter((country) => {
      if (country.region.toLowerCase().includes(input.toLowerCase())) {
        setOutput((output) => [...output, country]);
      }
      return output;
    });
  }, [input]);

  if (output.length === 0) {
    countriesData.filter((country) => {
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

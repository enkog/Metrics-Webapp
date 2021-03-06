import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ListGroup, Image } from 'react-bootstrap';
import axios from 'axios';
import { detailsSliceAction } from '../redux/detailsSlice';
import Header from './Header';

const CountryDetail = () => {
  const details = useSelector((state) => state.details);
  const { name } = useParams();
  const dispatch = useDispatch();

  const fetchCountryDetail = async () => {
    const res = await axios.get(`https://restcountries.com/v2/name/${name}`);
    dispatch(detailsSliceAction.selectedCountry(res.data[0]));
  };

  let languages = '';
  let currencies = '';

  Object.keys(details).forEach((key) => {
    if (key === 'languages') {
      languages += details[key][0].name;
    }
    if (key === 'currencies') {
      currencies += details[key][0].name;
    }
  });

  useEffect(() => {
    if (name && name !== '') {
      fetchCountryDetail();
    }
  }, [name, fetchCountryDetail]);

  return (
    <div>
      <Header content="Country Details" />
      <div className="text-dark details">
        <div className="details-img w-100 d-flex justify-content-center align-items-center">
          <Image src={details.flag} fluid />
        </div>
        <ListGroup>
          <ListGroup.Item className="text-center text-uppercase fw-bolder fs-3">
            <p>{details.name}</p>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <p>Region</p>
            <p>{details.region}</p>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <p>Capital</p>
            <p>{details.capital}</p>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <p>Alpha3code</p>
            <p>{details.alpha3Code}</p>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <p>Population</p>
            <p>{details.population}</p>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <p>Independent</p>
            <p>{details.independent ? 'Yes' : 'No'}</p>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <p>Subregion</p>
            <p>{details.subregion}</p>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <p>Language</p>
            <p>{languages}</p>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <p>Currency</p>
            <p>{currencies}</p>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <p>Timezone</p>
            <p>{details.timezones}</p>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default CountryDetail;

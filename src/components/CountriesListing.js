import { useDispatch, useSelector } from 'react-redux';
import { Card, Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';
import { fetchCountries } from '../store/countriesSlice';

const CountryListing = () => {
  const countriesData = useSelector((state) => state.countries);

  if (countriesData.length !== 0) {
    countriesData.countries.map((country) => console.log(country));
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  return (
    <Row>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CountryListing;

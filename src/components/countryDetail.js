import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { detailsSliceAction } from '../store/detailsSlice';

const CountryDetail = () => {
  const details = useSelector((state) => state.details);
  console.log(details);
  const { name } = useParams();
  const dispatch = useDispatch();

  const fetchCountryDetail = async () => {
    const res = await axios.get(`https://restcountries.com/v2/name/${name}`);
    dispatch(detailsSliceAction.selectedCountry(res.data[0]));
  };

  useEffect(() => {
    if (name && name !== '') {
      fetchCountryDetail();
    }
  }, [name]);
  return (
    <div className="text-dark">
      hello
    </div>
  );
};

export default CountryDetail;

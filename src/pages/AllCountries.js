import CountriesListing from '../components/CountriesListing';
import Header from '../components/Header';

const AllCountries = () => {
  const list = <input type="text" className=" input-field mx-1" placeholder="Search by regions" />;

  return (
    <div>
      <Header content="Countries" search={list} />
      <CountriesListing />
    </div>
  );
};

export default AllCountries;

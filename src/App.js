import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import CountriesListing from './components/CountriesListing';
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => (<Redirect to="/countries" />)} />
        <Route exact path="/countries" component={CountriesListing} />
        <Route path="/countries/:name" component={CountryDetail} />
      </Switch>
    </Router>
  );
}

export default App;

import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import AllCountries from './pages/AllCountries';
import CountryDetail from './pages/CountryDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => (<Redirect to="/countries" />)} />
        <Route exact path="/countries" component={AllCountries} />
        <Route path="/countries/:name" component={CountryDetail} />
      </Switch>
    </Router>
  );
}

export default App;

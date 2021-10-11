import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import Header from './components/Header';
import AllCountries from './pages/AllCountries';
import CountryDetail from './pages/CountryDetail';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" render={() => (<Redirect to="/countries" />)} />
        <Route exact path="/countries" component={AllCountries} />
        <Route path="/countries/:name" component={CountryDetail} />
      </Switch>
    </Router>
  );
}

export default App;

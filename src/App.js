import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import AllCountries from './pages/AllCountries';
import Details from './pages/Details';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => (<Redirect to="/countries" />)} />
        <Route exact path="/countries" component={AllCountries} />
        <Route path="/countries/:name" component={Details} />
      </Switch>
    </Router>
  );
}

export default App;

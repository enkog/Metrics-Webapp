import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import App from '../App';

describe('App Component', () => {
  test('renders the App component', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>,
    )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

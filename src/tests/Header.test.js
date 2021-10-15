import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

describe('Header Component', () => {
  test('renders the Header component', () => {
    const component = renderer.create(
      <Router>
        <Header content="Countries" />
      </Router>,
    )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

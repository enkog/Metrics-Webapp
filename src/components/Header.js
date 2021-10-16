import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';

const Header = (props) => {
  const { content, search } = props;
  return (
    <>
      <Navbar>
        <NavLink to="/" className="d-flex align-items-center text-white ps-2 w-100">
          <FaAngleLeft />
          {' '}
          {content}
        </NavLink>
        <Nav className="ms-auto">
          {search}
        </Nav>
      </Navbar>
    </>
  );
};

Header.propTypes = {
  content: PropTypes.string.isRequired,
  search: PropTypes.instanceOf(Object).isRequired,
};

export default Header;

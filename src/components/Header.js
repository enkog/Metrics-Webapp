/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaAngleLeft, FaMicrophone, FaCog } from 'react-icons/fa';

const Header = (props) => {
  const { content, search } = props;
  return (
    <>
      <Navbar>
        <NavLink to="/" className="d-flex align-items-center text-white ps-2 w-100">
          <FaAngleLeft />
          {' '}
          {content}
          {search}
        </NavLink>
        <Nav className="ms-auto">
          <NavLink to="" className="text-white"><FaMicrophone /></NavLink>
          <NavLink to="" className="text-white ps-3 pe-2"><FaCog /></NavLink>
        </Nav>
      </Navbar>
    </>
  );
};

Header.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Header;

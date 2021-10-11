import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaAngleLeft, FaMicrophone, FaCog } from 'react-icons/fa';

const Header = () => (

  <>
    <Navbar>
      <NavLink to="/">
        <Navbar.Brand href="#home" className="d-flex align-items-center text-white ps-2">
          <FaAngleLeft />
          Countries
        </Navbar.Brand>
      </NavLink>
      <Nav className="ms-auto">
        <NavLink to="" className="text-white"><FaMicrophone /></NavLink>
        <NavLink to="" className="text-white ps-3 pe-2"><FaCog /></NavLink>
      </Nav>
    </Navbar>
  </>
);

export default Header;

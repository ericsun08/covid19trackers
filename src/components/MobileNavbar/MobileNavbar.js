import { Link } from 'react-router-dom';

const MobileNavbar = () => {
  return (
    <div className="container-fluid">
      <ul className="list-unstyled">
        <li className="mobileItem nav-item">
          <Link to="/" className="nav-link text-light">
            Home
          </Link>
        </li>
        <li className="mobileItem nav-item">
          <Link to="/Information" className="nav-link text-light">
            Information
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavbar;

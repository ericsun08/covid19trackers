//packages
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';

//components
import MobileNavbar from '../MobileNavbar/MobileNavbar';

//utils
import '../../utils/Navbar.css';

const Navbar = () => {
  function openMobileNavbar() {
    let MobileNav = document.getElementById('MobileNavbar');

    if (MobileNav.style.display === 'none') {
      MobileNav.style.display = 'block';
    } else {
      MobileNav.style.display = 'none';
    }
  }

  return (
    <Fragment>
      <nav className="container-fluid navbar navbar-expand-lg fixed-top shadow-lg myColor">
        <div className="container d-flex justify-content-between">
          <div className="mobileTitle container">
            <Link to="/" className="navbar-brand col-fluid text-light textStyleTitle">
              Covid-19 Trackers
            </Link>
          </div>
          <div className="collapse navbar-collapse navbar-expand-lg">
            <div className="container-fluid">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link text-light">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Information" className="nav-link text-light">
                    Information
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mobileNav">
            <span onClick={openMobileNavbar} id="menuButton">
              <Icon.ThreeDotsVertical color="white" size={30} />
            </span>
          </div>
        </div>
      </nav>
      <nav className="container myColor myMobileNavCon fixed-top" id="MobileNavbar">
        <MobileNavbar />
      </nav>
    </Fragment>
  );
};

export default Navbar;

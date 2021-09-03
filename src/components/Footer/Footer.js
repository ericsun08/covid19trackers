//packages
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';

//utils
import '../../utils/Footer.css';

const Footer = () => {
  return (
    <div className="myFooter container-fluid myColor">
      <div className="container p-3">
        <div className="row mt-5">
          <div className="col-xxl-4 col-md-4 mb-5">
            <Link to="/" className="navbar-brand col-fluid text-light textStyleTitle">
              Covid-19 Trackers
            </Link>
          </div>
          <div className="col-xxl-4 col-md-4 mb-5">
            <h5 className="text-light fw-bold">Information References</h5>
            <a href="https://www.who.int/health-topics/coronavirus#tab=tab_1" className="text-light text-decoration-none">
              World Health Organization
            </a>
            <h5 className="text-light fw-bold mt-3">API's</h5>
            <a href="https://github.com/Reynadi531/api-covid19-indonesia-v2" className="text-light text-decoration-none">
              Reynaldi531,
            </a>{' '}
            <a href="https://github.com/Reynadi531/vaksincovid19-api" className="text-light text-decoration-none">
              VaksinCovid19,
            </a>{' '}
            <a href="https://www.chartjs.org/" className="text-light text-decoration-none">
              Chart.js
            </a>
          </div>
          <div className="col-xxl-4 col-md-4">
            <h5 className="text-light fw-bold">My Contact</h5>
            <p className="text-light mt-4">
              <Icon.EnvelopeFill color="white" size={20} /> :{' '}
              <a href="mailto:suneric233@gmail.com" className="text-light text-decoration-none">
                suneric233@gmail.com
              </a>
            </p>
            <p className="text-light mt-4">
              <Icon.Github color="white" size={20} /> :{' '}
              <a href="https://github.com/ericsun08" className="text-light text-decoration-none">
                ericsun08
              </a>
            </p>
            <p className="text-light mt-4">
              <Icon.Linkedin color="white" size={20} /> :{' '}
              <a href="https://www.linkedin.com/in/eric-sun-98bb76192/" className="text-light text-decoration-none">
                Eric Sun
              </a>
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="row mt-2">
        <div className="col-xxl-12">
          <div className="container">
            <h6 className="text-light text-center">Copyright - Covid-19 Trackers - 2020</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

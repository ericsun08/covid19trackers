//packages
import { Fragment } from 'react';
import CountUp from 'react-countup';

const CovidNumber = (props) => {
  return (
    <Fragment>
      <div className="col-xxl-3 col-md-6 mb-2">
        <div className="card-body bg-danger d-flex justify-content-center rounded">
          <h3 className="card-text text-light fw-bold text-center ">
            <CountUp end={props.confirmed} duration={1} separator="," />
            <br />
            <br />
            <p className="card-text text-light fw-bold h5">Confirmed</p>
          </h3>
        </div>
      </div>
      <div className="col-xxl-3 col-md-6 mb-2">
        <div className="card-body bg-warning d-flex justify-content-center rounded">
          <h3 className="card-text text-light fw-bold text-center">
            <CountUp end={props.active} duration={1} separator="," />
            <br />
            <br />
            <p className="card-text text-light fw-bold h5">Active Case</p>
          </h3>
        </div>
      </div>
      <div className="col-xxl-3 col-md-6 mb-2">
        <div className="card-body bg-success d-flex justify-content-center rounded">
          <h3 className="card-text text-light fw-bold text-center">
            <CountUp end={props.recovered} duration={1} separator="," />
            <br />
            <br />
            <p className="card-text text-light fw-bold h5">Recovered</p>
          </h3>
        </div>
      </div>
      <div className="col-xxl-3 col-md-6 mb-2">
        <div className="card-body bg-secondary d-flex justify-content-center rounded">
          <h3 className="card-text text-light fw-bold text-center">
            <CountUp end={props.death} duration={1} separator="," />
            <br />
            <br />
            <p className="card-text text-light fw-bold h5">Death</p>
          </h3>
        </div>
      </div>
    </Fragment>
  );
};

export default CovidNumber;

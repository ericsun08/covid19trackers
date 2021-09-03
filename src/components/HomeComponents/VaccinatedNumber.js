//packages
import CountUp from 'react-countup';
import { Fragment } from 'react';

const VaccinatedNumber = (props) => {
  return (
    <Fragment>
      <div className="col-xxl-6 col-md-12 mb-2">
        <div className="card-body bg-info d-flex justify-content-center rounded">
          <h3 className="card-text text-light fw-bold text-center ">
            <CountUp end={props.VaccinatedData.vaksinasi1} duration={1} separator="," />
            <br />
            <br />
            <p className="card-text text-light fw-bold h5">Partially Vaccinated</p>
          </h3>
        </div>
      </div>
      <div className="col-xxl-6 col-md-12 mb-2">
        <div className="card-body bg-primary d-flex justify-content-center rounded">
          <h3 className="card-text text-light fw-bold text-center ">
            <CountUp end={props.VaccinatedData.vaksinasi2} duration={1} separator="," />
            <br />
            <br />
            <p className="card-text text-light fw-bold h5">Fully Vaccinated</p>
          </h3>
        </div>
      </div>
    </Fragment>
  );
};

export default VaccinatedNumber;

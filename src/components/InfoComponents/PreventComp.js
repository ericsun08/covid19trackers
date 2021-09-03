//packages
import { Fragment } from 'react';

//assets/images
import washHand from '../../assets/washHand.png';
import distancing from '../../assets/distance.png';
import cover from '../../assets/cover.png';
import face from '../../assets/face.JPG';
import home from '../../assets/home.JPG';
import smoke from '../../assets/smoke.JPG';

const PreventComp = () => {
  return (
    <Fragment>
      <div className="row mt-5">
        <div className="col-xxl-2 col-md-4 col-xs-6">
          <div className="card mb-3 preventContainer">
            <div className="card-body">
              <img src={washHand} className="mx-auto d-block" style={{ height: '50px', width: '50px' }} alt="WashHand" />
              <h6 className="card-title fw-bold mt-3 text-center">Wash Hand</h6>
            </div>
          </div>
        </div>
        <div className="col-xxl-2 col-md-4 col-xs-6">
          <div className="card mb-3 preventContainer">
            <div className="card-body">
              <img src={distancing} className="mx-auto d-block" style={{ height: '50px', width: '50px' }} alt="WashHand" />
              <h6 className="card-title fw-bold mt-3 text-center">Social Distancing</h6>
            </div>
          </div>
        </div>
        <div className="col-xxl-2 col-md-4 col-xs-6">
          <div className="card mb-3 preventContainer">
            <div className="card-body">
              <img src={cover} className="mx-auto d-block" style={{ height: '50px', width: '50px' }} alt="cover" />
              <h6 className="card-title fw-bold mt-3 text-center">Cover Your Mouth</h6>
            </div>
          </div>
        </div>
        <div className="col-xxl-2 col-md-4 col-xs-6">
          <div className="card mb-3 preventContainer">
            <div className="card-body">
              <img src={face} className="mx-auto d-block" style={{ height: '50px', width: '50px' }} alt="face" />
              <h6 className="card-title fw-bold mt-3 text-center">Don't Touching Face</h6>
            </div>
          </div>
        </div>
        <div className="col-xxl-2 col-md-4 col-xs-6">
          <div className="card mb-3 preventContainer">
            <div className="card-body">
              <img src={home} className="mx-auto d-block" style={{ height: '50px', width: '50px' }} alt="stayAtHome" />
              <h6 className="card-title fw-bold mt-3 text-center">Stay at Home</h6>
            </div>
          </div>
        </div>
        <div className="col-xxl-2 col-md-4 col-xs-6">
          <div className="card mb-3 preventContainer">
            <div className="card-body">
              <img src={smoke} className="mx-auto d-block" style={{ height: '50px', width: '50px' }} alt="smoke" />
              <h6 className="card-title fw-bold mt-3 text-center">Stop Smoking</h6>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PreventComp;

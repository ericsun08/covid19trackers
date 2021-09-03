//packages
import * as Icon from 'react-bootstrap-icons';

const MobileProvComp = (props) => {
  return (
    <div className="col=sm-12">
      <div className="card mb-4">
        <div className="card-header bg-secondary bg-opacity-50">
          <p className="h5">
            <Icon.GeoAltFill size={15} /> {props.Province}
          </p>
        </div>
        <div className="card-body">
          <p>
            <b>Confirmed:</b> {props.confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </p>
          <p>
            <b>Recovered:</b> {props.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </p>
          <p>
            <b>Death:</b> {props.death.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileProvComp;

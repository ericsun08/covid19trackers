//packages
import { Fragment } from 'react';
import CountUp from 'react-countup';

const NewCovid = (props) => {
  // const [loading, setisLoading] = useState(true)

  // useEffect(()=>{
  //     if(loading === true){
  //         setisLoading(false)
  //     }
  // },[loading, setisLoading])

  return (
    <Fragment>
      <div className="col-xxl-6 col-md-6">
        <div className="card-body bg-danger bg-opacity-25 border border-danger rounded mb-3">
          <h3 className="card-text text-danger fw-bold text-center ">
            {' '}
            <CountUp end={props.NewConfirmed} prefix="+" duration={1} separator="," />
            <br />
            <br />
            <p className="card-text text-danger fw-bold h5">New Confirmed</p>
          </h3>
        </div>
      </div>
      <div className="col-xxl-6 col-md-6">
        <div className="card-body bg-warning bg-opacity-25 border border-warning rounded mb-3">
          <h3 className="card-text text-warning fw-bold text-center ">
            <CountUp end={props.NewActive} duration={1} separator="," />
            <br />
            <br />
            <p className="card-text text-warning fw-bold h5">New Active Case</p>
          </h3>
        </div>
      </div>
      <div className="col-xxl-6 col-md-6">
        <div className="card-body bg-sucsess bg-opacity-25 border border-success rounded mb-3">
          <h3 className="card-text text-success fw-bold text-center ">
            <CountUp end={props.NewRecovered} prefix="+" duration={1} separator="," />
            <br />
            <br />
            <p className="card-text text-success fw-bold h5">New Recovered</p>
          </h3>
        </div>
      </div>
      <div className="col-xxl-6 col-md-6">
        <div className="card-body bg-secondary bg-opacity-25 border border-secondary rounded mb-3">
          <h3 className="card-text text-secondary fw-bold text-center ">
            <CountUp end={props.NewDeath} prefix="+" duration={1} separator="," />
            <br />
            <br />
            <p className="card-text text-secondary fw-bold h5">New Death</p>
          </h3>
        </div>
      </div>
    </Fragment>
  );
};

export default NewCovid;

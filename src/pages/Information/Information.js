//packages
import React, { Fragment } from 'react';

//components
import InfoComponent from '../../components/InfoComponents/InfoComponents';
import PreventComp from '../../components/InfoComponents/PreventComp';

//utils
import '../../utils/Information.css';

class Information extends React.Component {
  render() {
    return (
      <Fragment>
        <section>
          <div className="container">
            <div className="card shadow-lg myInfoTitle">
              <div className="row p-3">
                <h3 className="fw-bold">Information</h3>
              </div>
            </div>
          </div>
          <div className="container">
            <InfoComponent />
          </div>
        </section>
        <section>
          <div className="container mt-3">
            <div className="card shadow-lg myInfoTitle">
              <div className="row p-3">
                <h3 className="fw-bold">Prevention</h3>
              </div>
            </div>
          </div>
          <div className="container">
            <PreventComp />
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Information;

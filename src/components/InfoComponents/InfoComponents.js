//packages
import { Fragment } from 'react';

//assets/images
import corona from '../../assets/corona.JPG';
import symptoms from '../../assets/symptoms.JPG';

const InfoComponent = () => {
  return (
    <Fragment>
      <div className="row mt-5">
        <div className="col-xxl-6 col-md-6">
          <div className="card mb-4 infoContainer">
            <div className="card-body p-4">
              <img src={corona} className="infoImg mx-auto d-block" style={{ height: '150px', width: '150px' }} alt="covid-19" />
              <h4 className="text-center card-title fw-bolder mt-2">Covid-19</h4>
              <p className="card-text text-center mt-4">
                Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus. Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without
                requiring special treatment. The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory
                etiquette (for example, by coughing into a flexed elbow).
              </p>
            </div>
          </div>
        </div>
        <div className="col-xxl-6 col-md-6">
          <div className="card mb-2 infoContainer">
            <div className="card-body">
              <img src={symptoms} className="infoImg mx-auto d-block" style={{ height: '150px', width: '150px' }} alt="covid-19 symptoms" />
              <h4 className="text-center card-title fw-bolder mt-2">Symptoms</h4>
              <p className="card-text text-center mt-4">
                COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization. <b>Most common symptoms</b>: fever. dry cough. tiredness.
                <b> Less common symptoms</b>: aches and pains. sore throat. diarrhoea. conjunctivitis. headache. loss of taste or smell. a rash on skin, or discolouration of fingers or toes.<b> Serious symptoms</b>: difficulty breathing or
                shortness of breath. chest pain or pressure. loss of speech or movement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default InfoComponent;

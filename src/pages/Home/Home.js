//packages
import React, { Fragment } from 'react';
import axios from 'axios';
import moment from 'moment';

//HomeComponents
import CovidNumber from '../../components/HomeComponents/CovidNumber';
import NewCovid from '../../components/HomeComponents/NewCovid';
import CovidChart from '../../components/HomeComponents/CovidChart';
import VaccinatedNumber from '../../components/HomeComponents/VaccinatedNumber';
import MobileProvComp from '../../components/HomeComponents/MobileProvComp';

//utils
import '../../utils/Home.css';

class Home extends React.Component {
  state = {
    covidCases: [],
    covidCasesByCity: [],
    vaccinatedNumber: [],
    covidCasesByCityId: [],
    isLoading: true,
  };

  getCovidDataAPI = () => {
    let CovidNumber = 'https://apicovid19indonesia-v2.vercel.app/api/indonesia/more';
    let CovidByCity = 'https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi';
    let CovidByCityId = 'https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi/alt';
    let Vaccinated = 'https://vaksincovid19-api.vercel.app/api/vaksin';

    const requestCovidNumber = axios.get(CovidNumber);
    const requestCovidByCity = axios.get(CovidByCity);
    const requestCovidByCityId = axios.get(CovidByCityId);
    const requestVaccinated = axios.get(Vaccinated);

    axios.all([requestCovidNumber, requestCovidByCity, requestVaccinated, requestCovidByCityId]).then(
      axios.spread((...responses) => {
        const responseOne = responses[0];
        const responseTwo = responses[1];
        const responseThree = responses[2];
        const responseFour = responses[3];
        this.setState({
          covidCases: responseOne.data,
          covidCasesByCity: responseTwo.data,
          vaccinatedNumber: responseThree.data,
          covidCasesByCityId: responseFour.data,
        });
      })
    );
  };

  componentDidMount() {
    this.getCovidDataAPI();
  }

  render() {
    return (
      <Fragment>
        <section className="sectionZero">
          <div className="container">
            <div className="card shadow p-3">
              <div className="row">
                <h3 className="fw-bold">New Covid-19 Case in Indonesia</h3>
                <p>
                  <b>Date:</b> {this.state.covidCases.penambahan ? moment(this.state.covidCases.penambahan.created).format('DD-MM-YYYY, HH:MM') : 'Loading...'}
                </p>
              </div>
              <div className="row">
                <NewCovid
                  NewConfirmed={this.state.covidCases.penambahan ? this.state.covidCases.penambahan.positif : null}
                  NewActive={
                    this.state.covidCases.penambahan ? (
                      this.state.covidCases.penambahan.dirawat
                    ) : (
                      <div className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    )
                  }
                  NewRecovered={
                    this.state.covidCases.penambahan ? (
                      this.state.covidCases.penambahan.sembuh
                    ) : (
                      <div className="spinner-border text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    )
                  }
                  NewDeath={
                    this.state.covidCases.penambahan ? (
                      this.state.covidCases.penambahan.meninggal
                    ) : (
                      <div className="spinner-border text-secondary" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    )
                  }
                  loading={
                    this.state.isLoading && (
                      <div className="spinner-border text-danger" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    )
                  }
                />
              </div>
            </div>
          </div>
        </section>
        <section className="sectionOne mt-5">
          <div className="container">
            <div className="card shadow-lg p-3">
              <div className="row">
                <h3 className="fw-bold">Total Covid-19 Case in Indonesia</h3>
                <p>
                  <b>Last Update:</b> {this.state.covidCases.total ? moment(this.state.covidCases.total.lastUpdate).format('DD-MM-YYYY, HH:MM') : 'Loading...'}
                </p>
              </div>
              <div className="row">
                <CovidNumber
                  confirmed={
                    this.state.covidCases.total ? (
                      this.state.covidCases.total.positif
                    ) : (
                      <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    )
                  }
                  active={
                    this.state.covidCases.total ? (
                      this.state.covidCases.total.dirawat
                    ) : (
                      <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    )
                  }
                  recovered={
                    this.state.covidCases.total ? (
                      this.state.covidCases.total.sembuh
                    ) : (
                      <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    )
                  }
                  death={
                    this.state.covidCases.total ? (
                      this.state.covidCases.total.meninggal
                    ) : (
                      <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    )
                  }
                />
              </div>
            </div>
          </div>
        </section>
        <section className="sectionTwo mt-5">
          <div className="container">
            <div className="card shadow-lg p-3">
              <div className="row">
                <h3 className="fw-bold">Total of Vaccinated Number in Indonesia</h3>
                <p>
                  <b>Last Update:</b> {this.state.vaccinatedNumber.lastUpdate ? moment(this.state.vaccinatedNumber.lastUpdate).format('DD-MM-YYYY, HH:MM') : 'Loading...'}
                </p>
              </div>
              <div className="row">
                <VaccinatedNumber VaccinatedData={this.state.vaccinatedNumber} />
              </div>
            </div>
          </div>
        </section>
        <section className="sectionThree mt-5">
          <div className="container">
            <div className="card shadow-lg p-3">
              <div className="row">
                <h3 className="fw-bold">Covid-19 Chart Sort by Province</h3>
              </div>
            </div>
            <div className="container">
              <div className="col-12 mt-5">
                <CovidChart chartData={this.state.covidCasesByCity} />
              </div>
            </div>
          </div>
        </section>
        <section className="mobileSection mt-5">
          <div className="container">
            <div className="card shadow-lg p-3">
              <div className="row">
                <h3 className="fw-bold">Covid-19 Case Sort by Province</h3>
              </div>
              <div className="mobileProvContainer mt-3">
                <div className="row">
                  {this.state.covidCasesByCityId.map((Data) => {
                    return <MobileProvComp key={Data.Kode_Provi} Province={Data.Provinsi} confirmed={Data.Kasus_Posi} recovered={Data.Kasus_Semb} death={Data.Kasus_Meni} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Home;

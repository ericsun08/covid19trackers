//packages
import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const CovidChart = (props) => {
  const [covidDataChart, setCovidDataChart] = useState({});

  const Chart = () => {
    let provinsi = props.chartData.map((p) => {
      return p.provinsi;
    });
    let confirmed = props.chartData.map((c) => {
      return c.kasus;
    });
    let activeCase = props.chartData.map((a) => {
      return a.dirawat;
    });
    let recovered = props.chartData.map((r) => {
      return r.sembuh;
    });
    let death = props.chartData.map((d) => {
      return d.meninggal;
    });

    setCovidDataChart({
      labels: provinsi,
      datasets: [
        {
          label: 'Confirmed',
          data: confirmed,
          backgroundColor: ['#DC3545'],
          borderWidth: 1,
        },
        {
          label: 'Active Case',
          data: activeCase,
          backgroundColor: ['#FFC107'],
          borderWidth: 1,
        },
        {
          label: 'Recovered',
          data: recovered,
          backgroundColor: ['#198754'],
          borderWidth: 1,
        },
        {
          label: 'Death',
          data: death,
          backgroundColor: ['#6C757D'],
          borderWidth: 1,
        },
      ],
    });
  };

  useEffect(() => {
    Chart();
  }, [props.chartData]);

  return (
    <div>
      <Bar
        data={covidDataChart}
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Covid-19 Case in Indonesia',
            },
          },
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            },
          },
        }}
      />
    </div>
  );
};

export default CovidChart;

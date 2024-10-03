import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

const LineChart = ({ historicalData }) => {

  // Initialize `data` as an array
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];
    if (historicalData?.prices) {
      historicalData.prices.forEach((item) => {
        // Properly format the date and push it to the data array
        dataCopy.push([`${new Date(item[0]).toLocaleDateString()}`, item[1]]);
      });
      setData(dataCopy);
    }
  }, [historicalData]); // Correct the dependency array here

  return (
    <Chart
      chartType='LineChart'
      data={data}
      height="100%"
      legendToggle
    />
  );
};

export default LineChart;

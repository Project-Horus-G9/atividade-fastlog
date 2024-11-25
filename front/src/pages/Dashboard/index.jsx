import React, { useState, useEffect } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Box, Button, Typography, TextField } from "@mui/material";
import AverageResponseTimeChart from "../../components/Status/graphs/averageResponseTimeChart.jsx"
import ResponseTimeDistributionChart from "../../components/Status/graphs/responseTimeDistribuition.jsx";
import HourlyResponseTimeChart from "../../components/Status/graphs/hourlyResponseTimeChart.jsx";
import LatencyPeaksChart from "../../components/Status/graphs/latencyPeaksChart.jsx";

import api from "../../api.js";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Height, Padding } from "@mui/icons-material";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Dashboard = () => {
  const [averageResponseTime, setAverageResponseTime] = useState(null);
  const [responseTimeDistribution, setResponseTimeDistribution] = useState([]);
  const [hourlyResponseTimes, setHourlyResponseTimes] = useState([]);
  const [latencyPeaks, setLatencyPeaks] = useState([]);

  const latencyData = [
    { id: 1, valor: 600 },
    { id: 2, valor: 700 },
    { id: 3, valor: 800 },
    { id: 4, valor: 750 },
  ];

  const hourlyData = [
    { hour: 0, averageResponseTime: 200 },
    { hour: 1, averageResponseTime: 250 },
    { hour: 2, averageResponseTime: 300 },
    { hour: 3, averageResponseTime: 150 },
    { hour: 4, averageResponseTime: 280 },
  ];

  const responseTimeData = [
    { range: "0-50ms", count: 120 },
    { range: "50-100ms", count: 200 },
    { range: "100-200ms", count: 150 },
    { range: "200-500ms", count: 80 },
    { range: "500ms+", count: 30 },
  ];

  const averageResponseTimes = [
    { hour: "1", averageResponseTime: 120 },
    { hour: "2", averageResponseTime: 150 },
    { hour: "3", averageResponseTime: 90 },
    { hour: "4", averageResponseTime: 200 },
    { hour: "5", averageResponseTime: 180 },
    // ... outros dados de tempo médio de resposta por hora
  ];


  return (
    <div>


      <Box  // cabeçalho 

        style={
          {
            width: "100%",
            backgroundColor: "#f7f30a",
            display: "flex",
            justifyContent: "center",  // Alinha horizontalmente
            alignItems: "center",
            height: "10rem"
          }}>
        <h1>Métricas de Desempenho</h1>
      </Box>

      <Box style={{
        width: "100%",
        height: "50rem",
        display: "flex"
      }}>

        <Box // Lado Esquerdo
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            justifyContent: "space-between",
            alignItems: "center",
            width: "50%",
            height: "50rem",
            padding: "3rem"
          }}
        >

          <Box
            style={{
              width: "80%",
              height: "20rem"

            }}
          >

            <AverageResponseTimeChart averageResponseTimes={averageResponseTimes}/>

          </Box>

          <Box
            style={{
              width: "80%",
              height: "20rem"

            }}
          >
            <ResponseTimeDistributionChart responseTimeDistribution={responseTimeData}/>
          </Box>
        </Box>


        <Box // Lado Direito
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            justifyContent: "space-between",
            alignItems: "center",
            width: "50%",
            height: "50rem",
            padding: "3rem"
          }}
        >

          <Box
            style={{
              width: "80%",
              height: "20rem"
            }}
          >

            <HourlyResponseTimeChart hourlyResponseTimes={hourlyData}/>

          </Box>

          <Box
            style={{
              width: "80%",
              height: "20rem"
            }}
          >
            <LatencyPeaksChart latencyPeaks={latencyData}/>
          </Box>
        </Box>



      </Box>




    </div>
  );
};

export default Dashboard;

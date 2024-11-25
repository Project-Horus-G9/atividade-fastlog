import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, CircularProgress } from "@mui/material";
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

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Dashboard = () => {
  const [averageResponseTime, setAverageResponseTime] = useState(null);
  const [responseTimeDistributions, setResponseTimeDistributions] = useState([]);
  const [hourlyResponseTimess, setHourlyResponseTimess] = useState([]);
  const [latencyPeaks, setLatencyPeaks] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  const colherDados = async () => {
    try {
      const response = await api.get('/api/metrics/latency-peaks', {
        params: { metricName: 'LP', threshold: 100.0 }
      });
      setLatencyPeaks(response.data);
    } catch (error) {
      console.error('Erro ao buscar picos de latência:', error);
    }

    try {
      const response = await api.get('/api/metrics/average-response-time', {
        params: { metricName: 'ART' }
      });
      setAverageResponseTime(response.data);
    } catch (error) {
      console.error('Erro ao buscar média de tempo de resposta:', error);
    }

    try {
      const response = await api.get('/api/metrics/response-time-distribution', {
        params: { metricName: 'RTD' }
      });
      setResponseTimeDistributions(response.data);
      console.log("OKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK")
    } catch (error) {
      console.error('Erro ao buscar distribuição de tempo de resposta:', error);
    }

    try {
      const response = await api.get('/api/metrics/average-response-time-by-hour', {
        params: { metricName: 'HRT' }
      });
      setHourlyResponseTimess(response.data);
    } catch (error) {
      console.error('Erro ao buscar tempo médio de resposta por hora:', error);
    }

    setLoading(false); // Define o loading como falso após capturar todos os dados
  };

  useEffect(() => {
    colherDados(); // Chama a função colherDados ao montar o componente
  }, []);

  return (
    <div>
      <Box
        style={{
          width: "100%",
          backgroundColor: "#f7f30a",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10rem"
        }}
      >
        <h1 onClick={goHome}>Métricas de Desempenho</h1>

      </Box>

      {loading ? (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh"
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box style={{ width: "100%", height: "50rem" }}>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              height: "3rem",
              padding: "3rem"
            }}
          >
            <Typography variant="h5">
              O tempo médio de resposta é: {averageResponseTime} ms
            </Typography>
          </Box>

          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "80%",
              height: "30rem",
              padding: "3rem",
              marginLeft: "12rem"
            }}
          >
            <Box style={{ width: "45%", height: "20rem" }}>
              <HourlyResponseTimeChart hourlyResponseTimes={hourlyResponseTimess} />
            </Box>

            <Box style={{ width: "45%", height: "20rem" }}>
              <ResponseTimeDistributionChart responseTimeDistribution={responseTimeDistributions} />
            </Box>
          </Box>

          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "70%",
              height: "30rem",
              marginLeft: "31rem"
            }}
          >
            <Box style={{ width: "60%", height: "20rem" }}>
              <LatencyPeaksChart latencyPeaks={latencyPeaks} />
            </Box>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default Dashboard;

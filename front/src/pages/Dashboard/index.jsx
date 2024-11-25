import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import AverageResponseTimeChart from "../../components/graphs/averageResponseTimeChart.jsx";
import ResponseTimeDistributionChart from "../../components/graphs/responseTimeDistribuition.jsx";
import HourlyResponseTimeChart from "../../components/graphs/hourlyResponseTimeChart.jsx";
import LatencyPeaksChart from "../../components/graphs/latencyPeaksChart.jsx";
import api from "../../api.js";
import styles from "./style.js"; // Importação ajustada
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

  const getData = async () => {
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

    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Box sx={styles.header}>
        <Typography variant="h4" sx={styles.typography}>Métricas de Desempenho</Typography>
        <Button variant="contained" onClick={goHome} sx={styles.button}>Voltar</Button>
      </Box>

      {loading ? (
        <Box sx={styles.loadingContainer}>
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={styles.dashboardContainer}>


          <Box sx={styles.chartsContainer}>
            <Box sx={styles.graphContainer}>
              <HourlyResponseTimeChart hourlyResponseTimes={hourlyResponseTimess} />
            </Box>
            <Box sx={styles.kpiContainer}>
              <Typography variant="h5">
                Tempo médio de resposta:
              </Typography>
              <Typography variant="h6">
                {averageResponseTime} ms
              </Typography>
            </Box>
          </Box>

          <Box sx={styles.chartsContainer}>
            <Box sx={styles.graphContainer}>
              <LatencyPeaksChart latencyPeaks={latencyPeaks} />
            </Box>
            <Box sx={styles.graphContainer}>
              <ResponseTimeDistributionChart responseTimeDistribution={responseTimeDistributions} />
            </Box>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default Dashboard;

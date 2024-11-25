import React, { useState, useEffect } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const MetricsDashboard = () => {
  const [averageResponseTime, setAverageResponseTime] = useState(null);
  const [responseTimeDistribution, setResponseTimeDistribution] = useState([]);
  const [hourlyResponseTimes, setHourlyResponseTimes] = useState([]);
  const [latencyPeaks, setLatencyPeaks] = useState([]);

  useEffect(() => {
    fetchMetrics();
  }, []);

  const fetchMetrics = async () => {
    try {
      // 1. Tempo Médio de Resposta
      const averageResponse = await axios.get(
        "/api/metrics/average-response-time",
        { params: { metricName: "Tracking Search Load Time" } }
      );
      setAverageResponseTime(averageResponse.data);

      // 2. Distribuição de Tempo de Resposta
      const distributionResponse = await axios.get(
        "/api/metrics/response-time-distribution",
        { params: { metricName: "Tracking Search Load Time" } }
      );
      setResponseTimeDistribution(distributionResponse.data);

      // 4. Tempo Médio por Hora
      const hourlyResponse = await axios.get(
        "/api/metrics/average-response-time-by-hour",
        { params: { metricName: "Tracking Search Load Time" } }
      );
      setHourlyResponseTimes(hourlyResponse.data);

      // 6. Picos de Latência
      const latencyResponse = await axios.get("/api/metrics/latency-peaks", {
        params: { metricName: "Tracking Search Load Time", threshold: 500 },
      });
      setLatencyPeaks(latencyResponse.data);
    } catch (error) {
      console.error("Erro ao buscar métricas:", error);
    }
  };

  return (
    <div>
      <h1>Métricas de Desempenho</h1>

      {/* 1. Tempo Médio de Resposta */}
      <div>
        <h2>Tempo Médio de Resposta</h2>
        {averageResponseTime !== null ? (
          <p>
            O tempo médio de resposta é <strong>{averageResponseTime.toFixed(2)} ms</strong>.
          </p>
        ) : (
          <p>Carregando...</p>
        )}
      </div>

      {/* 2. Distribuição de Tempo de Resposta */}
      <div>
        <h2>Distribuição de Tempo de Resposta</h2>
        <Bar
          data={{
            labels: responseTimeDistribution.map((d) => d.range),
            datasets: [
              {
                label: "Contagem",
                data: responseTimeDistribution.map((d) => d.count),
                backgroundColor: ["#4caf50", "#ff9800", "#f44336"],
              },
            ],
          }}
          options={{
            plugins: {
              legend: { display: true, position: "top" },
              tooltip: { enabled: true },
            },
            scales: {
              y: { beginAtZero: true },
            },
          }}
        />
      </div>

      {/* 4. Tempo Médio de Resposta por Hora */}
      <div>
        <h2>Tempo Médio de Resposta por Hora</h2>
        <Line
          data={{
            labels: hourlyResponseTimes.map((d) => `${d.hour}:00`),
            datasets: [
              {
                label: "Tempo Médio (ms)",
                data: hourlyResponseTimes.map((d) => d.averageResponseTime),
                borderColor: "#3e95cd",
                fill: false,
              },
            ],
          }}
          options={{
            plugins: {
              legend: { display: true, position: "top" },
              tooltip: { enabled: true },
            },
            scales: {
              x: { beginAtZero: true },
              y: { beginAtZero: true },
            },
          }}
        />
      </div>

      {/* 6. Picos de Latência */}
      <div>
        <h2>Picos de Latência</h2>
        {latencyPeaks.length > 0 ? (
          <Pie
            data={{
              labels: latencyPeaks.map((p) => `ID ${p.id}`),
              datasets: [
                {
                  label: "Latência (ms)",
                  data: latencyPeaks.map((p) => p.valor),
                  backgroundColor: [
                    "#e57373",
                    "#f06292",
                    "#ba68c8",
                    "#9575cd",
                    "#7986cb",
                  ],
                },
              ],
            }}
            options={{
              plugins: {
                legend: { display: true, position: "right" },
                tooltip: { enabled: true },
              },
            }}
          />
        ) : (
          <p>Não foram detectados picos de latência acima do limite.</p>
        )}
      </div>
    </div>
  );
};

export default MetricsDashboard;

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

// Registra os componentes necessários do Chart.js
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend);

const AverageResponseTimeChart = ({ averageResponseTimes }) => {
  // Verifica se os dados de tempo de resposta médio foram passados via props
  if (!averageResponseTimes || averageResponseTimes.length === 0) {
    return <p>Não foram encontrados dados de tempo de resposta médio.</p>;
  }

  const chartData = {
    labels: averageResponseTimes.map((data) => data.hour), // Exemplo: ['1', '2', '3', ...] para as horas
    datasets: [
      {
        label: "Tempo Médio de Resposta (ms)",
        data: averageResponseTimes.map((data) => data.averageResponseTime), // Dados reais da métrica
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: false,
        tension: 0.1, // Para suavizar a linha
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Hora",
        },
      },
      y: {
        title: {
          display: true,
          text: "Tempo (ms)",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: "100%", padding: "1rem" }}>
      <h2>Tempo Médio de Resposta</h2>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default AverageResponseTimeChart;

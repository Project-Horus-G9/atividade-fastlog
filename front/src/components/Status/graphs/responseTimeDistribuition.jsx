import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ResponseTimeDistributionChart = ({ responseTimeDistribution }) => {
  // Verifica se os dados de distribuição de tempo de resposta foram passados via props
  if (!responseTimeDistribution || responseTimeDistribution.length === 0) {
    return <p>Não foram encontrados dados de distribuição de tempo de resposta.</p>;
  }

  const chartData = {
    labels: responseTimeDistribution.map((d) => d.range), // Exemplo: ['0-50ms', '50-100ms', '100-200ms', ...]
    datasets: [
      {
        label: "Contagem",
        data: responseTimeDistribution.map((d) => d.count), // Contagem de requisições por faixa de tempo
        backgroundColor: ["#4caf50", "#ff9800", "#f44336"], // Cores das barras
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: { display: true, position: "top" },
      tooltip: { enabled: true },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div>
      <h2>Distribuição de Tempo de Resposta</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default ResponseTimeDistributionChart;

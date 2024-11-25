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
    labels: responseTimeDistribution.map((d) => d.range), // Exemplo: ['100-500ms', '500-1000ms', ...]
    datasets: [
      {
        label: "Contagem",
        data: responseTimeDistribution.map((d) => d.count), // Contagem de requisições por faixa de tempo
        backgroundColor: "#4caf50", // Cor das barras
        borderColor: "#388e3c", // Cor da borda das barras
        borderWidth: 1, // Largura da borda das barras
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: { display: true, position: "top" },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Faixa de Tempo de Resposta",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Contagem",
        },
      },
    },
  };

  return (
    <div style={{ width: "70%", padding: "1rem" }}>
      <h2>Distribuição de Tempo de Resposta</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default ResponseTimeDistributionChart;

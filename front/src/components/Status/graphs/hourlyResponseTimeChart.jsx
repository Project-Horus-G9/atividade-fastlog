import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, Tooltip, Legend);

const HourlyResponseTimeChart = ({ hourlyResponseTimes }) => {
  // Verifica se os dados de tempo médio de resposta por hora foram passados via props
  if (!hourlyResponseTimes || hourlyResponseTimes.length === 0) {
    return <p>Não foram encontrados dados de tempo médio de resposta por hora.</p>;
  }

  const chartData = {
    labels: hourlyResponseTimes.map((d) => `${d.hour}:00`), // Labels: ['0:00', '1:00', '2:00', ...]
    datasets: [
      {
        label: "Tempo Médio (ms)",
        data: hourlyResponseTimes.map((d) => d.averageResponseTime), // Dados da média de resposta por hora
        borderColor: "#3e95cd", // Cor da linha
        backgroundColor: "rgba(62, 149, 205, 0.2)", // Cor do fundo
        fill: true, // Preenchimento abaixo da linha
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
          text: "Hora"
        }
      },
      y: { 
        title: {
          display: true,
          text: "Tempo Médio de Resposta (ms)"
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Tempo Médio de Resposta por Hora</h2>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default HourlyResponseTimeChart;

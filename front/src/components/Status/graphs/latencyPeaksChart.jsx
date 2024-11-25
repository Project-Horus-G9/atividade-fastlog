import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const LatencyPeaksChart = ({ latencyPeaks }) => {
  // Verifica se os dados de picos de latência foram passados via props
  if (!latencyPeaks || latencyPeaks.length === 0) {
    return <p>Não foram detectados picos de latência acima do limite.</p>;
  }

  const chartData = {
    labels: latencyPeaks.map((p) => `ID ${p.id}`), // Labels dos picos de latência
    datasets: [
      {
        label: "Latência (ms)",
        data: latencyPeaks.map((p) => p.valor), // Valor dos picos de latência
        backgroundColor: [
          "#e57373", // Cor do primeiro segmento
          "#f06292", // Cor do segundo segmento
          "#ba68c8", // Cor do terceiro segmento
          "#9575cd", // Cor do quarto segmento
          "#7986cb", // Cor do quinto segmento
        ],
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: { display: true, position: "right" },
      tooltip: { enabled: true },
    },
  };

  return (
    <div style={{width:"50%", display:"flex", flexDirection:"column", justifyContent:"center"}}>
      <h2>Picos de Latência</h2>
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};

export default LatencyPeaksChart;

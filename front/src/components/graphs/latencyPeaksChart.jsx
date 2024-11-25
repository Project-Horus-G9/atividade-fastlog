import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Box, Typography } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

const LatencyPeaksChart = ({ latencyPeaks }) => {
  // Verifica se os dados de picos de latência foram passados via props
  if (!latencyPeaks || latencyPeaks.length === 0) {
    return <p>Não foram detectados picos de latência acima do limite.</p>;
  }

  const chartData = {
    labels: latencyPeaks.map((p) => `ID ${p.id} - ${p.name}`), // Labels com ID e nome
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
    <Box sx={{ height: 400 , width: 350}}>
      <Typography variant="h5" sx={{ fontWeight: "bold", padding: "0 15px" }}>
        Picos de Latência
      </Typography>
      <Pie data={chartData} options={chartOptions} />
    </Box>
  );
};

export default LatencyPeaksChart;

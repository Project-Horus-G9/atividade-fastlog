import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, TextField } from "@mui/material";
import style from "./style.js";
import Status from "../../components/Status/index.jsx";
import api from "../../api.js";

function Home() {
    const [trackingCode, setTrackingCode] = React.useState("");
    const [status, setStatus] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [loadTime, setLoadTime] = React.useState(0);
    const navigate = useNavigate();

    const goDashboard = () => {
        navigate('/dashboard');
    };

    useEffect(() => {
        if (!trackingCode) return;

        const startTime = performance.now();

        const getObject = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await api.get(`/api/entregas/pedido/${trackingCode}`);
                setStatus(response.data.statusEntrega);
            } catch (error) {
                setError("Erro ao buscar os dados da encomenda. Tente novamente.");
                console.error(error);
            } finally {
                setLoading(false);
                const endTime = performance.now();
                const totalLoadTime = endTime - startTime;
                setLoadTime(totalLoadTime);

                sendPerformanceMetrics({
                    name: "Tracking Search Load Time",
                    valor: totalLoadTime.toFixed(2),
                    unit: "ms",
                    category: "Performance",
                    timestamp: new Date().toISOString(),
                    trackingCode,
                });
            }
        };

        getObject();
    }, [trackingCode]);

    const sendPerformanceMetrics = async (metric) => {
        try {
            await api.post("/api/metrics", metric);
        } catch (error) {
            console.error("Erro ao enviar métricas:", error);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    const handleSearch = () => {
        const code = document.getElementById("trackingCodeId").value;
        setTrackingCode(code);
    };

    return (
        <Box sx={style.box}>
            <Box sx={style.boxTop}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <TextField
                        variant="standard"
                        sx={style.input}
                        label="Código de rastreamento"
                        id="trackingCodeId"
                        onKeyDown={handleKeyDown}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        sx={style.button}
                        disabled={loading}
                        onClick={handleSearch}
                    >
                        {loading ? "Carregando..." : "Rastrear"}
                    </Button>
                    <Box>
                        <Button
                            onClick={() => goDashboard()}
                            sx={style.button}
                        >
                            Ir para dashboard
                        </Button>
                    </Box>
                </Box>

                <Box sx={style.logoContainer}>
                    <Typography variant="h4" sx={style.typography}>
                        Rastreamento de Encomendas
                    </Typography>
                </Box>
            </Box>

            <Box sx={style.boxBottom}>
                {error && <Typography color="error">{error}</Typography>}
                {status.length > 0 ? (
                    status.map((item, index) => (
                        <Status key={index} props={item} />
                    ))
                ) : (
                    <></>
                )}
            </Box>
        </Box>
    );
}

export default Home;

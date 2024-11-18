import React, { useEffect } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import style from "./style.js";
import Status from "../../components/Status/index.jsx";
import api from "../../api.js";

function Home() {
    const [trackingCode, setTrackingCode] = React.useState("");  // Renomeei 'object' para 'trackingCode' para maior clareza
    const [status, setStatus] = React.useState([]);  // Armazena os status da entrega
    const [loading, setLoading] = React.useState(false);  // Adicionei estado de carregamento
    const [error, setError] = React.useState(null);  // Adicionei estado de erro

    // useEffect que dispara a requisição sempre que o código de rastreamento mudar
    useEffect(() => {
        if (!trackingCode) return; // Se não houver código, não faz a requisição

        const getObject = async () => {
            setLoading(true);  // Começa o carregamento
            setError(null);  // Reseta erro antes da requisição
            try {
                const response = await api.get(`/api/entregas/pedido/${trackingCode}`);  // Alterei o endpoint para 'api/entregas/pedido'
                setStatus(response.data.statusEntrega);
            } catch (error) {
                setError("Erro ao buscar os dados da encomenda. Tente novamente.");  // Adiciona mensagem de erro
                console.error(error);
            } finally {
                setLoading(false);  // Finaliza o carregamento
            }
        };

        getObject(); // Chama a função de requisição
    }, [trackingCode]);

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSearch();  // Alterei o nome para 'handleSearch'
        }
    };

    const handleSearch = () => {
        var code = document.getElementById("trackingCodeId").value;  // Alterei 'object' para 'code' para maior clareza
        setTrackingCode(code); 
    }

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
                        <Status key={index} props={item} />  // Descomentei esta parte para renderizar o componente Status
                    ))
                ) : (
                    <></>
                )}
            </Box>
        </Box>
    );
}

export default Home;

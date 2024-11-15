import React from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import style from "./style.js";
import Status from "../../components/Status/index.jsx";

function Home() {

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            // getObject();
        }
    };

    return (
        <Box sx={style.box}>
            <Box sx={style.boxTop}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <TextField variant="standard" sx={style.input} label="Código de rastreamento" onKeyDown={handleKeyDown} />
                    <Button variant="contained" color="primary" sx={style.button}>
                        Rastrear
                    </Button>
                </Box>
                <Box sx={style.logoContainer}>
                    <Typography variant="h4" sx={style.typography}>
                        Rastreamento de Encomendas
                    </Typography>
                </Box>
            </Box>

            <Box sx={style.boxBottom}>
                <Status type="Objeto postado"/>
                <Status type="Objeto em trânsito"/>
                <Status type="Saiu para entrega"/>
                <Status type="Entregue"/>
                <Status type="Objeto recebido pelos Correios do Brasil"/>
            </Box>
        </Box>
    );
}

export default Home;

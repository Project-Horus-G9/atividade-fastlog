import React from "react";
import { style } from "./style.js";
import { Box, Button, Typography } from "@material-ui/core";

function Home() {
// interface simples onde os clientes possam inserir o número de rastreamento e visualizar o status da entrega.
    return (
        <Box sx={style.box}>
            <Typography variant="h4" sx={style.typography}>Rastreamento de encomendas</Typography>
            <Button variant="contained" color="primary" sx={style.button}>Rastrear</Button>
        </Box>
    );
}

export default Home;
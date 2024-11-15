import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HouseIcon from "@mui/icons-material/House";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import MarkunreadMailboxIcon from "@mui/icons-material/MarkunreadMailbox";
import style from "./style.js";

function Status({ type }) {

    const getStatusContent = () => {
        switch (type) {
            case "Entregue":
                return (
                    <Box sx={style.statusContainer}>
                        <HouseIcon sx={style.iconStyle} />
                        <Typography>{type}</Typography>
                    </Box>
                );
            case "Saiu para entrega":
                return (
                    <Box sx={style.statusContainer}>
                        <LocalShippingIcon sx={style.iconStyle} />
                        <Typography>{type}</Typography>
                    </Box>
                );
            case "Objeto em trânsito":
                return (
                    <Box sx={style.statusContainer}>
                        <LocalShippingIcon sx={style.iconStyle} />
                        <Typography>{type}</Typography>
                    </Box>
                );
            case "Objeto postado":
                return (
                    <Box sx={style.statusContainer}>
                        <MarkunreadMailboxIcon sx={style.iconStyle} />
                        <Typography>{type}</Typography>
                    </Box>
                );
            case "Objeto recebido pelos Correios do Brasil":
                return (
                    <Box sx={style.statusContainer}>
                        <MarkunreadMailboxIcon sx={style.iconStyle} />
                        <Typography>{type}</Typography>
                    </Box>
                );
            default:
                return (
                    <Box sx={style.statusContainer}>
                        <LocalPostOfficeIcon sx={style.iconStyle} />
                        <Typography>{type}</Typography>
                    </Box>
                );
        }
    };

    return getStatusContent();
}

export default Status;

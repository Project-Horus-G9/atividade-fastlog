import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import PendingIcon from '@mui/icons-material/Pending';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import ErrorIcon from '@mui/icons-material/Error';
import style from "./style.js";

function Status({ props }) {

    const { idStatus, descricao, tipo } = props;

    console.log(props);
    

    const getStatusContent = () => {
        switch (tipo) {
            case "CREATE":
                return (
                    <Box sx={style.statusContainer}>
                        <LibraryAddIcon sx={style.iconStyle} />
                        <Typography variant="body2">{descricao}</Typography>
                    </Box>
                );
            case "PROCESS":
                return (
                    <Box sx={style.statusContainer}>
                        <PendingIcon sx={style.iconStyle} />
                        <Typography variant="body2">{descricao}</Typography>
                    </Box>
                );
            case "MOVING":
                return (
                    <Box sx={style.statusContainer}>
                        <LocalShippingIcon sx={style.iconStyle} />
                        <Typography variant="body2">{descricao}</Typography>
                    </Box>
                );
            case "DELIVERED":
                return (
                    <Box sx={style.statusContainer}>
                        <LocalPostOfficeIcon sx={style.iconStyle} />
                        <Typography variant="body2">{descricao}</Typography>
                    </Box>
                );
            case "UNDELIVERED":
                return (
                    <Box sx={style.statusContainer}>
                        <ErrorIcon sx={style.iconStyle} />
                        <Typography variant="body2">{descricao}</Typography>
                    </Box>
                );
            default:
                return (
                    <Box sx={style.statusContainer}>
                        <LocalPostOfficeIcon sx={style.iconStyle} />
                        <Typography variant="body2">{descricao}</Typography>
                    </Box>
                );
        }
    };

    return (
        <Box sx={{ marginBottom: "10px" }}>
            {getStatusContent()}
            <Divider sx={{ marginY: 1 }} />
        </Box>
    );
}

export default Status;

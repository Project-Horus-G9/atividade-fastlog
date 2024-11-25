import { display, height, width } from "@mui/system";

const style = {
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        borderBottom: "1px solid #ddd",
        height: "12vh",
        backgroundColor: "#F7F30A",
    },
    typography: {
        fontSize: "1.5rem",
        fontWeight: "bold",
    },
    button: {
        width: 120,
        backgroundColor: "#000",
        color: "#fff",
        "&:hover": {
            backgroundColor: "#000",
        },
        "&:active": {
            backgroundColor: "#000",
        },
    },
    loadingContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
    },
    dashboardContainer: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
    },

    kpiContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
        margin: "20px",
        width: "fit-content",
        height: "fit-content",
    },
    graphContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
        margin: "20px",
        width: "fit-content",
        height: "400px",
    },
    chartsContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "top",
    },
};

export default style;

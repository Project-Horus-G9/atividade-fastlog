const style = {
    box: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
    },
    boxTop: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        borderBottom: "1px solid #ddd",
        height: "12vh",
        backgroundColor: "#F7F30A",
    },
    boxBottom: {
        flex: 1,
        backgroundColor: "#f9f9f9",
        padding: "20px",
    },
    input: {
        width: 300,
        marginRight: "20px",
        padding: "8px 0",
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
    logoContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
    },
    typography: {
        fontSize: "1.5rem",
        fontWeight: "bold",
    },
};

export default style;

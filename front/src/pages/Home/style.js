const Style = () => {
    return {
        box: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
        },
        typography: {
            marginBottom: 20,
        },
        button: {
            width: 200,
        },
    };
};

export const style = () => Style();
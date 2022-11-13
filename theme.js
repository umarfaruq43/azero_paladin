const { extendTheme } = require("@chakra-ui/react");

const colors = {
    brand: {
        white: "#fff",
        deepBlue: "#030b15",
        cyan: "#00C4F4",
        dimWhite: "#A4B4C3",
        lightWhite: "#121A23",
    },
};

const theme = extendTheme({ colors });

export default theme;

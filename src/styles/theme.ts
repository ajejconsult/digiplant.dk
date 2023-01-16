import { createTheme } from "@mui/material/styles";

export const colors = {
    background: "#fafafa",
    // primary: "#333399",
    secondary: "#f2f2f2",
    // error: "#e2232b",
    disabled: "#0000000d",
    shadows: "#e3e3e9de",
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#133345",
    dark: "#0a3641",
    grey: "#666666",
    error: "#d73a4a",
    success: "#23b7c2",
    successGreen: "#47b063",
    white: "#fff",
    brandBlue: "#00A7BA",
};

export const defaultFieldInputProps = { disableUnderline: true };
const defaultTheme = createTheme();

const theme = createTheme({
    palette: {
        primary: { main: colors.primary },
        background: { default: "#282c34" },
        secondary: { main: colors.secondary },
        success: { main: colors.successGreen, light: colors.success },
        grey: { "100": colors.grey },
    },
    typography: {
        fontFamily: [
            "MontHeavy",
            "-apple-system",
            "BlinkMacSystemFont",
            "Segoe UI",
            "Roboto",
            "Helvetica Neue",
            "Arial",
            "sans-serif",
            "Apple Color Emoji",
            "Segoe UI Emoji",
            "Segoe UI Symbol",
        ].join(","),

        button: {
            color: colors.primary,
            fontFamily: "MontHeavy, arial",
        },
        body1: {
            color: colors.primary,
            fontFamily: "MontHeavy",
        },
        body2: {
            color: colors.primary,
            fontFamily: "MontHeavy",
        },
        caption: {
            color: colors.primary,
            fontFamily: "MontHeavy",
        },
        subtitle1: {
            color: colors.primary,
            fontFamily: "MontHeavy",
        },
        subtitle2: {
            color: colors.primary,
            fontFamily: "MontHeavy",
        },
        h1: {
            color: colors.primary,
            fontFamily: "MontHeavy",
        },
        h2: {
            color: colors.primary,
            fontFamily: "MontBold",

            [defaultTheme.breakpoints.down("lg")]: {
                fontSize: "2.5rem",
            },
        },
        h3: {
            color: colors.primary,
            fontFamily: "MontLight",
            [defaultTheme.breakpoints.down("md")]: {
                fontSize: "2.5rem",
            },
            [defaultTheme.breakpoints.only("xs")]: {
                fontSize: "2rem",
            },
        },
        h4: {
            color: colors.primary,
            fontFamily: "MontLight",
        },
        h5: {
            color: colors.primary,
            fontFamily: "MontLight",
        },
        h6: {
            color: colors.primary,
            fontFamily: "MontLight",
        },
        overline: {
            color: colors.primary,
            fontFamily: "MontLight",
        },
    },
    components: {},
});

export default theme;

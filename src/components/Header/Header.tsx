import React from "react";
import { CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import theme from "../../styles/theme";
import { Link, useLocation } from "react-router-dom";
import LogogIcon from "../../assets/logoSymbol.png";

const Header = () => {
    const location = useLocation();
    console.log(location);
    const GreenFlagDisabledPages = ["/koontakt", "/cv", "/priser"];
    return (
        <div>
            <Box
                color="secondary"
                sx={{
                    background: theme.palette.secondary.main,
                    position: "relative",
                    "&::after": {
                        content: '""',
                        position: "absolute",
                        display: "inline-block",
                        height: "2.5rem",
                        width: "100%",
                        background: theme.palette.secondary.main,
                        transform: "skewy(-1deg)",
                        bottom: -20,
                    },
                    zIndex: 3,
                }}
                component="header">
                <Box component="nav" sx={{ display: "flex", justifyContent: "end", p: 4, "& > a": { mr: 6, textDecoration: "none" } }}>
                    <Link to="/priser">
                        <Typography variant="body2">Service I priser</Typography>
                    </Link>
                    <Link to="/cv">
                        <Typography variant="body2">CV</Typography>
                    </Link>
                    <Link to="/refrencer">
                        <Typography variant="body2">Refrencer</Typography>
                    </Link>
                    <Link to="/kontakt">
                        <Typography variant="body2">Kontakt</Typography>
                    </Link>
                </Box>
            </Box>
            <Box
                sx={{
                    zIndex: 999,
                    position: "absolute",
                    top: 0,
                    left: "2.5rem",
                    background: theme.palette.primary.main,
                    width: "22vw",
                    height: "20vw",
                    "&::after": {
                        content: '""',
                        position: "absolute",
                        display: "inline-block",
                        height: "10vw",
                        width: "100%",
                        background: "inherit",
                        transform: "skewy(-9deg)",
                        bottom: -32,
                        zIndex: -5,
                    },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <Box display="flex" alignItems={"center"}>
                        <CardMedia src={LogogIcon} component="img" sx={{ width: "90%", height: "100%" }} />

                        <Typography color="white" variant="h2" component="h1" fontFamily={"MontHeavy"}>
                            DIGI
                            <br></br>
                            <span>Plant</span>
                        </Typography>
                    </Box>
                </Link>
            </Box>
            {GreenFlagDisabledPages.includes(location.pathname) && (
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        background: "linear-gradient(180deg, rgba(71,176,99,1) 0%, rgba(35,183,194,1) 100%)",
                        width: "20vw",
                        height: "27vw",
                        zIndex: 5,
                        "&::after": {
                            content: '""',
                            position: "absolute",
                            display: "inline-block",
                            height: "4rem",
                            width: "100%",
                            background: "rgba(35,183,194,1)",
                            transform: "skewy(-9deg)",
                            bottom: -30,
                            zIndex: 4,
                        },
                    }}
                />
            )}
        </div>
    );
};

export default Header;

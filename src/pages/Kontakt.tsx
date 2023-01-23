import React from "react";
import Layout from "../components/Layout";
import { Box, Grid, Typography, Link as Mlink, CardMedia } from "@mui/material";
import theme from "../styles/theme";
import "aos/dist/aos.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import MaliForm from "../components/MaliForm";
import LogoHorizontal from "../assets/logo-horizontal.png";

const Kontakt = () => {
    return (
        <Layout>
            <Grid
                container
                sx={{
                    background: "#556b78",
                    px: 30,
                    py: 30,
                    position: "relative",

                    [theme.breakpoints.down("lg")]: {
                        px: 10,
                        py: 10,
                    },
                }}
                justifyContent="center"
                spacing={4}>
                <Grid item md={4} xs={12} container justifyContent={"center"}>
                    <Mlink
                        // href={`https://www.google.com/maps/dir/?api=1&destination=48.4169113,1.4905021,17`}
                        sx={{
                            ":hover": {
                                color: theme.palette.primary.main,
                                "#location-icon": {
                                    animation: "updown 1s ease 0.2s infinite",
                                    "@keyframes updown": {
                                        "0%": {
                                            transform: "translateY(0px)",
                                        },
                                        "50%": {
                                            transform: "translateY(8px)",
                                        },
                                        "100%": {
                                            transform: "translateY(0px)",
                                        },
                                    },
                                },
                            },
                            textDecoration: "none",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                        target="_blank">
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "10rem",
                                height: "10rem",
                                background: "#4784a7",
                                p: 2,
                                borderRadius: "100%",
                                ":hover": {},
                            }}>
                            <LocationOnIcon
                                id="location-icon"
                                color="secondary"
                                sx={{
                                    fontSize: "7rem",
                                }}
                            />
                        </Box>
                        <br />
                        <Typography variant="body1" color="white" textAlign="center">
                            HER KØRER JEG FRA
                        </Typography>
                        <br />
                        <Typography variant="body1" color="white" textAlign="center">
                            KRISTIAN MØLLER Adresselinje 1 Postnummer og By
                        </Typography>
                    </Mlink>
                </Grid>
                <Grid item md={4} xs={12} container justifyContent={"center"}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        {" "}
                        <Mlink
                            href={`tel:004553535353`}
                            sx={{
                                ":hover": {
                                    color: theme.palette.primary.main,
                                    "#phone-icon": {
                                        animation: "phone 2s ease 0.2s infinite",
                                        "@keyframes phone": {
                                            "0%": {
                                                transform: "rotate(0) scale(1) skew(1deg)",
                                            },
                                            "10%": {
                                                transform: "rotate(-25deg) scale(1) skew(1deg)",
                                            },
                                            "20%": {
                                                transform: "rotate(25deg) scale(1) skew(1deg)",
                                            },
                                            "30%": {
                                                transform: "rotate(-25deg) scale(1) skew(1deg)",
                                            },
                                            "40%": {
                                                transform: "rotate(25deg) scale(1) skew(1deg)",
                                            },
                                            "50%": {
                                                transform: "rotate(0) scale(1) skew(1deg)",
                                            },
                                            "100%": {
                                                transform: "rotate(0) scale(1) skew(1deg)",
                                            },
                                        },
                                    },
                                },
                                textDecoration: "none",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "10rem",
                                    height: "10rem",
                                    background: "#4784a7",
                                    p: 2,
                                    borderRadius: "100%",
                                    ":hover": {},
                                }}>
                                <LocalPhoneIcon
                                    id="phone-icon"
                                    color="secondary"
                                    sx={{
                                        fontSize: "7rem",
                                    }}
                                />
                            </Box>
                            <br />
                            <Typography variant="body1" color="white" textAlign="center">
                                53 53 53 53
                            </Typography>
                            <br />
                            <Typography variant="body1" color="white" textAlign="center">
                                00 45 53 53 53 53
                            </Typography>
                        </Mlink>
                    </Box>
                </Grid>
                <Grid item md={4} xs={12} container justifyContent={"center"}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        {" "}
                        <Mlink
                            href={`mailto:krm@digiplant.dk`}
                            sx={{
                                ":hover": {
                                    color: theme.palette.primary.main,
                                    "#mail-icon": {
                                        animation: "updown 1s ease 0.2s infinite",
                                        "@keyframes updown": {
                                            "0%": {
                                                transform: "translateY(0px)",
                                            },
                                            "50%": {
                                                transform: "translateY(8px)",
                                            },
                                            "100%": {
                                                transform: "translateY(0px)",
                                            },
                                        },
                                    },
                                },

                                textDecoration: "none",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "10rem",
                                    height: "10rem",
                                    background: "#4784a7",
                                    p: 2,
                                    borderRadius: "100%",
                                    ":hover": {},
                                }}>
                                <LocalPostOfficeIcon
                                    id="mail-icon"
                                    color="secondary"
                                    sx={{
                                        fontSize: "7rem",
                                    }}
                                />
                            </Box>
                            <br />
                            <Typography variant="body1" color="white" textAlign="center">
                                krm@digiplant.dk
                            </Typography>
                        </Mlink>
                    </Box>
                </Grid>
            </Grid>

            <Grid
                container
                sx={{
                    px: 30,
                    py: 10,
                    [theme.breakpoints.down("md")]: {
                        px: 5,
                    },
                }}
                spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h2">KONTAKT</Typography>
                    <Typography variant="h5">
                        Har du en forespørgsel på et projekt - eller spørgsmål til konceptet, kan du sende den direkte her. Du får svar inden for et
                        døgn.
                    </Typography>
                    <CardMedia component={"img"} src={LogoHorizontal} sx={{ width: "16rem", ml: "-0.5rem" }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <MaliForm />
                </Grid>
            </Grid>
        </Layout>
    );
};

export default Kontakt;

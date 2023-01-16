import React from "react";
import Layout from "../components/Layout";
import BuildingImg from "../assets/buildings2.png";
import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import theme from "../styles/theme";
import "aos/dist/aos.css";
import Profile from "../assets/profile.png";

const Home = () => {
    const Kvalifikationer = [
        "AG-tech, data & digitalisering",
        "Digitaliseret datadrevet landbrug - hvordan?",
        "Implementering med eksemplets magt",
        "Projektleder med både den teoretiske og praktiske værktøjskasse fyldt.",
        "Flere års erfaring med: -forandringsledelse -projektstyring",
        "driftsledelse",
    ];

    return (
        <Layout>
            <Grid container zIndex={0}>
                <Grid item xs={12} md={8}>
                    <CardMedia
                        src={BuildingImg}
                        component="img"
                        sx={{
                            width: "90%",
                            height: "100%",
                            mt: 2,
                            position: "relative",
                            zIndex: -999,
                            [theme.breakpoints.down("md")]: {
                                width: "100%",
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={4} p={4}>
                    <Box display="flex" height={"100%"} flexDirection={"column"} justifyContent={"center"} alignItems={"end"}>
                        <Typography variant="h2" textAlign={"right"} color={theme.palette.grey[100]}>
                            SUPPORT TIL DIN FORRETNING
                        </Typography>
                        <Button
                            href="/priser"
                            variant="contained"
                            sx={{ textTransform: "none", borderRadius: "6rem", color: "white" }}
                            color="success"
                            size="large">
                            Læs mere
                        </Button>
                    </Box>
                </Grid>
            </Grid>
            <Grid
                container
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                    position: "relative",
                    zIndex: -5,
                    px: 25,
                    py: 10,
                    [theme.breakpoints.down("lg")]: {
                        px: 5,
                        py: 10,
                    },
                    background: theme.palette.secondary.main,
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        display: "inline-block",
                        height: "2.5rem",
                        width: "100%",
                        background: theme.palette.secondary.main,
                        transform: "skewy(-1deg)",
                        top: -20,
                        zIndex: 100000,
                    },
                }}>
                <Grid item md={8} order={{ xs: 2, md: 1 }}>
                    <Typography variant="h3" component="h1" sx={{ py: 2, mt: 4 }}>
                        KRISTIAN MOLLER
                    </Typography>
                    <Typography variant="h6" component="p">
                        Her tror jeg, du skal skrive en sammenhængende tekst omkring at du er SMV Digital rådgiver og hvad det kan betyde fo
                        virksomheden. Nedenunder måske et kort afsnit om dig: hvorfor er du dygtig til at projektlede, implementere mm.
                    </Typography>
                    <br />
                    <Typography variant="h5" fontFamily={"MontHeavy"}>
                        Kvalifikationer
                    </Typography>
                    <ul>
                        {Kvalifikationer.map((item: string, i: any) => (
                            <li>
                                <Typography variant="h6" fontFamily={"MontHeavy"} sx={{ p: 0 }} key={i}>
                                    {item}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                </Grid>
                <Grid item md={4} container justifyContent={"center"} order={{ xs: 1, md: 2 }}>
                    <CardMedia
                        src={Profile}
                        component="img"
                        sx={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                        }}
                    />
                </Grid>
            </Grid>
        </Layout>
    );
};

export default Home;

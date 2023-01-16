import React from "react";
import Layout from "../components/Layout";
import BuildingImg from "../assets/buildings-real.jpg";
import Profile from "../assets/profile.png";
import { Box, CardMedia, Grid, Typography } from "@mui/material";
import theme from "../styles/theme";
import AOS from "aos";
import "aos/dist/aos.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const CvPage = () => {
    React.useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const CvList = {
        Telefon: "0045 20 70 57 54",
        Mail: "krm@digiplant.dk",
        Praktisk: "Mit kontor er i Silkeborg, der er udgangspunkt for min kørsel.",
        "Jeg tilbyder":
            "Jeg tilbyder mit netværk til skalering af early stage produkter. Jeg bidrager både med early stage salg, udvikling af virksomhedens organisation, samt direkte driftsopgaver.",
    };

    return (
        <Layout>
            <Box sx={{ position: "relative", width: "100%", height: "fit-content" }}>
                <Box sx={{ position: "relative", width: "100%", height: "fit-content" }}>
                    <CardMedia src={BuildingImg} component="img" sx={{ width: "100%", height: "100%", position: "relative", zIndex: -333 }} />
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            width: "100%",
                            height: "100%",
                            zIndex: -10,
                            backgroundColor: "black",
                            opacity: ".5",
                        }}
                    />
                </Box>
                <Grid
                    container
                    justifyContent={"center"}
                    sx={{
                        position: "absolute",
                        bottom: "-5rem",
                        [theme.breakpoints.down("xl")]: {
                            position: "relative",
                            top: "-2rem",
                        },
                    }}>
                    <Grid container item lg={9} xl={6} xs={11} sx={{ background: theme.palette.secondary.main, boxShadow: theme.shadows[15] }}>
                        <Grid item md={6}>
                            <CardMedia src={Profile} component="img" sx={{ width: "100%", height: "100%" }} />
                        </Grid>
                        <Grid item md={6} sx={{ background: theme.palette.secondary.main }}>
                            <Box px={4} pt={4}>
                                <Typography variant="h5" fontFamily={"MontBold"}>
                                    Kristian Møller
                                </Typography>
                                <Typography variant="body1" fontFamily={"MontLight"} sx={{ mb: 4 }}>
                                    Forandring, implementering & digitalisering
                                </Typography>
                                {Object.entries(CvList).map(([key, val], index) => (
                                    <>
                                        <Typography variant="h5" fontFamily={"MontBold"}>
                                            {key}
                                        </Typography>
                                        <Typography variant="h6" sx={{ mb: 2 }}>
                                            {val}
                                        </Typography>
                                    </>
                                ))}
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{ background: theme.palette.success.main, display: "flex", justifyContent: "center", p: 1 }}>
                                <LinkedInIcon color="secondary" fontSize="large" />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>

            <Grid
                container
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    px: 40,
                    pb: 20,
                    pt: 4,
                    [theme.breakpoints.down("lg")]: {
                        px: 5,
                        py: 10,
                    },
                }}>
                <Typography variant="h3">Mere om mig</Typography>
                <Typography variant="h6" textAlign="center">
                    Her tror jeg, du skal skrive en sammenhængende tekst omkring at du er SMV Digital rådgiver og hvad det kan betyde fo virksomheden.
                </Typography>
                <Typography variant="h6" textAlign="center">
                    Nedenunder måske et kort afsnit om dig: hvorfor er du dygtig til at projektlede, implementere mm.
                </Typography>
            </Grid>
        </Layout>
    );
};

export default CvPage;

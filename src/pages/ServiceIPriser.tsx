import React from "react";
import Layout from "../components/Layout";
import BuildingImg from "../assets/buildings-real.jpg";
import { Box, CardMedia, Grid, Typography, Button } from "@mui/material";
import theme from "../styles/theme";
import "aos/dist/aos.css";
import pricesData from "../prices.json";

const ServiceIPriser = () => {
    console.log({ pricesData });
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
                            backgroundColor: "#888b3f",
                            opacity: ".7",
                        }}
                    />
                </Box>
                <Box
                    position="absolute"
                    sx={{
                        top: 0,
                        right: 0,
                        display: "grid",
                        height: "100%",
                        gridTemplateColumns: "repeat(4,1fr)",
                        placeItems: "center",
                        [theme.breakpoints.down("md")]: {
                            pt: 2,
                            position: "relative",
                            color: theme.palette.grey[100],
                        },
                    }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gridColumnStart: 4,
                            justifyContent: "center",
                            alignItems: "end",
                            pr: 2,
                        }}>
                        <Typography
                            variant="h2"
                            textAlign={"right"}
                            color={"white"}
                            sx={{
                                [theme.breakpoints.down("md")]: {
                                    color: theme.palette.grey[100],
                                },
                            }}>
                            Servicepakker & priser
                        </Typography>
                        <Button
                            variant="contained"
                            href="/kontakt"
                            sx={{ textTransform: "none", borderRadius: "6rem", color: "white" }}
                            color="success"
                            size="large">
                            Kontakt
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Grid
                container
                sx={{
                    justifyContent: "center",
                    py: 12,
                }}
                spacing={2}>
                {Object.entries(pricesData).map(([key, val], i) => (
                    <Grid item key={i} xs={11} md={3}>
                        <Box sx={{ background: "#D1E0E8", height: "100%" }}>
                            <Box
                                sx={{
                                    p: 2,
                                    display: "flex",
                                    justifyContent: "center",
                                    background: `rgba(19,51,68,${i === 0 ? 0.9 : i === 1 ? 0.6 : 0.3})`,
                                }}>
                                <Typography variant="h5" fontFamily={"MontHeavy"} color="white">
                                    {key}
                                </Typography>
                            </Box>
                            <Box sx={{ p: 2 }}>
                                {Object.entries(val).map(([key, val], index) => (
                                    <Typography variant="body1" fontFamily={"MontBold"} sx={{ pb: 1 }}>{`${key}:   ${val}`}</Typography>
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Layout>
    );
};

export default ServiceIPriser;

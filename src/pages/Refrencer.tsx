import React from "react";
import Layout from "../components/Layout";
import BuildingImg from "../assets/world.png";
import { Box, CardMedia, Grid, Typography } from "@mui/material";
import "aos/dist/aos.css";
import RefrencerProfile from "../components/RefrencerProfile";
import NilsPic from "../assets/nils-pic.png";
import NathanPic from "../assets/nathan-pic.png";
import DigiFarm from "../assets/digifarm.png";
import FoodOrigin from "../assets/foodorigin.png";

const Refrencer = () => {
    const cofounders = {
        "Nils Helset": {
            description:
                "“Kristian have been supporting me in business development in a period, and it have a high value that it is a flexible how to use Kristian and the broad competences he has. I know him for a professional approach with humor and direct common-sense approach for farming and business value. The farming background combined with experiences in AG-Tech development is very useful”.",
            pic: NilsPic,
            logo: DigiFarm,
        },
        "Nathan Dorn": {
            description:
                "“I meet Kristian in the valleys of Salinas and Watsonville where he travelled around with demoing an Agricultural Robot, doing market analysis. I know him as an honest, common sense professional business developer, who have the aim of improving farming approach for the benefit of all parties, regarding farm business”",
            pic: NathanPic,
            logo: FoodOrigin,
        },
    };

    return (
        <Layout>
            <Box sx={{ position: "relative", width: "100%", height: "fit-content" }}>
                <CardMedia src={BuildingImg} component="img" sx={{ width: "100%", height: "100%", position: "relative", zIndex: -333, mt: -3 }} />
            </Box>
            <Box sx={{ display: "grid", placeItems: "center" }}>
                <Box mt={6}>
                    <Typography variant="h3" textAlign={"center"} fontFamily="MontHeavy">
                        HVAD SIGER ANDRE OM SAMARBEJDET..?
                    </Typography>
                    <Typography variant="h6" textAlign={"center"}>
                        Mere end 2000 timers erfaring - fordelt på flere end 30 forskellige projekter
                    </Typography>
                </Box>
                <Grid container justifyContent={"center"} spacing={8} mt={4}>
                    {Object.entries(cofounders).map(([key, val], index: number) => (
                        <Grid item md={4} key={index}>
                            <RefrencerProfile cofounderName={key} textDiscreption={val.description} profile={val.pic} logo={val.logo} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Layout>
    );
};

export default Refrencer;

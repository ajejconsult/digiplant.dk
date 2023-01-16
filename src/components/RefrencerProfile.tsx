import { Box, CardMedia, Typography } from "@mui/material";
import React, { FC } from "react";

interface RefrencerProfileProps {
    cofounderName: string;
    textDiscreption: string;
    profile: string;
    logo: string;
}

const RefrencerProfile: FC<RefrencerProfileProps> = ({ cofounderName, textDiscreption, profile, logo }) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", mb: 6, mt: 2 }}>
            <CardMedia component={"img"} src={profile} sx={{ width: "8rem", height: "8rem", borderRadius: "100%" }} />
            <CardMedia component={"img"} src={logo} sx={{ width: "7rem", height: "4rem", mt: 2 }} />
            <Typography variant="h6" textAlign={"center"} fontSize={"1rem"}>
                {textDiscreption}
            </Typography>
            <br />
            <Typography variant="body1">{cofounderName}</Typography>
            <Typography variant="body2">Co-founder & CEO</Typography>
        </Box>
    );
};

export default RefrencerProfile;

import React, { useState } from "react";
import { ButtonBase, CardMedia, ClickAwayListener, Collapse, Typography } from "@mui/material";
import { Box } from "@mui/system";
import theme from "../../styles/theme";
import { Link } from "react-router-dom";
import LogogIcon from "../../assets/logo-vertical.png";
import BurgerMenu from "./BurgerMenu";

const MobileHeader = () => {
    const [open, setOpen] = useState(false);

    return (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
            <Box
                color="secondary"
                sx={{
                    position: "relative",
                    background: theme.palette.secondary.main,
                    zIndex: 3,
                }}
                component="header">
                <Box display="flex" alignItems={"center"} p={1}>
                    <Link to="/" style={{ textDecoration: "none", flexGrow: 1 }}>
                        <Box display="flex" alignItems={"center"}>
                            <CardMedia src={LogogIcon} component="img" sx={{ width: "1.5rem", mr: 1 }} />

                            <Typography variant="h5" fontFamily={"MontHeavy"}>
                                DIGI
                                <br></br>
                                <span>Plant</span>
                            </Typography>
                        </Box>
                    </Link>
                    <ButtonBase onClick={() => setOpen(!open)}>
                        <BurgerMenu isOpen={open} />
                    </ButtonBase>
                </Box>
                <Collapse in={open}>
                    <Box
                        component="nav"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            p: 4,
                            "& > a": { mb: 4, textDecoration: "none" },
                        }}>
                        <Link to="/priser">
                            <Typography variant="body2">Service priser</Typography>
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
                </Collapse>
            </Box>
        </ClickAwayListener>
    );
};

export default MobileHeader;

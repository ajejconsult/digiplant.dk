import { useMediaQuery } from "@mui/material";
import React from "react";
import theme from "../styles/theme";
import Header from "./Header/Header";
import MobileHeader from "./Header/MobileHeader";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const isAboveMedium = useMediaQuery(theme.breakpoints.up("lg"));
    return (
        <>
            {isAboveMedium ? <Header /> : <MobileHeader />}
            {children}
        </>
    );
};

export default Layout;

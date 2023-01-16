import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import CvPage from "./pages/CvPage";
import Home from "./pages/Home";
import Kontakt from "./pages/Kontakt";
import Refrencer from "./pages/Refrencer";
import ServiceIPriser from "./pages/ServiceIPriser";
import theme from "./styles/theme";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/cv",
            element: <CvPage />,
        },
        {
            path: "/refrencer",
            element: <Refrencer />,
        },
        {
            path: "/priser",
            element: <ServiceIPriser />,
        },
        {
            path: "/kontakt",
            element: <Kontakt />,
        },
    ]);
    console.log({ theme });
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;

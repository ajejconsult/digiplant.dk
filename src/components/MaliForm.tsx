import { Button, Grid, TextField, TextFieldProps, Typography } from "@mui/material";
import React, { useRef } from "react";
import { useNavigate, redirect } from "react-router-dom";

const MaliForm = () => {
    const navn = useRef<TextFieldProps>();
    const telephone = useRef<TextFieldProps>();
    const mail = useRef<TextFieldProps>();
    const subject = useRef<TextFieldProps>();
    const mailBody = useRef<TextFieldProps>();
    let navigate = useNavigate();

    function handleSend() {
        console.log(navn.current?.value);
        // @ts-ignore
        window.location = `mailto:krm@digiplant.dk?subject=${subject.current?.value}&body=${encodeURIComponent(
            "Navn: " +
                navn.current?.value +
                "\n" +
                "\n" +
                "Telefonnummer: " +
                telephone.current?.value +
                "\n" +
                "\n" +
                "Mail : " +
                mail.current?.value +
                "\n" +
                "\n" +
                mailBody.current?.value
        )}`;
    }
    console.log(navn.current?.value);

    return (
        <form>
            <Typography variant="body1">OM DIG</Typography>
            <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                    <TextField inputRef={navn} fullWidth placeholder="Navn" />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField inputRef={telephone} fullWidth placeholder="Telefonnummer" />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField inputRef={mail} fullWidth placeholder="Mail" />
                </Grid>
            </Grid>

            <br />
            <Typography variant="body1">OM PROJEKTET</Typography>
            <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                    <TextField inputRef={subject} fullWidth placeholder="Hvad drejer det sig om?" />
                </Grid>
                <Grid item xs={12}>
                    <TextField inputRef={mailBody} fullWidth placeholder="Beskrivelse" multiline />
                </Grid>
                <Grid item xs={12} container justifyContent={"center"}>
                    <Button
                        onClick={handleSend}
                        variant="contained"
                        sx={{ textTransform: "none", borderRadius: "6rem", color: "white" }}
                        color="success"
                        size="large">
                        Send
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default MaliForm;

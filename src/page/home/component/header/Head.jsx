import React from "react";
import { Box, Grid, Container } from "@mui/material";
//
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
//
import Logo from "../../../../assets/Instagram Logo.jpg";

export default function Head() {
  return (
    <Box component="div">
      <Container sx={{ borderBottom: "solid #A6A6AA 1px" }}>
        <Grid
          container
          spacing={1}
          py="10px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={2}>
            <CameraAltOutlinedIcon fontSize="large" />
          </Grid>
          <Grid item xs={7}>
            <Box
              component="img"
              alt="logo"
              src={Logo}
              sx={{ width: "8rem", ml: "50px" }}
            />
          </Grid>
          <Grid item xs={2}>
            <LiveTvOutlinedIcon fontSize="large" />
          </Grid>
          <Grid item xs={1}>
            <SendOutlinedIcon fontSize="large" sx={{ rotate: "-40deg" }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

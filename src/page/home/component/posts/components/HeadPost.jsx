// react
import React from "react";
// mui
import { Box, Grid } from "@mui/material";
// icon
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function HeadPost({ profileImg, username, country }) {
  return (
    <Grid
      pb="5px"
      container
      spacing={1}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Grid item xs={1}>
        <Box
          component="img"
          alt="Profile"
          src={profileImg}
          sx={{ width: "2rem", borderRadius: "50%" }}
        />
      </Grid>
      <Grid item xs={10}>
        <Box
          display="flex"
          alignItems="center"
          fontWeight="600"
          fontSize="13px"
          ml="5px"
        >
          {username}
          <Box
            component="img"
            alt="instagram-verification-badge"
            src="https://img.icons8.com/color/48/instagram-verification-badge.png"
            width="12px"
            pl="5px"
          />
        </Box>
        <Box fontWeight="400" fontSize="11px" ml="5px">
          {country}
        </Box>
      </Grid>
      <Grid item xs={1}>
        <MoreHorizIcon />
      </Grid>
    </Grid>
  );
}

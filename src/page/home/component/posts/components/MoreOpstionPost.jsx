import React from "react";
import { Box, Grid, Container } from "@mui/material";
// icon
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";

export default function MoreOpstionPost({
  username,
  Description,
  File,
  userLike,
  like,
}) {
  return (
    <Container>
      <Box component="div">
        <Grid
          py="10px"
          container
          spacing={1}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item xs={1.5}>
            <Box component="div" mr="1rem">
              <FavoriteBorderIcon sx={{ fontSize: "30px" }} />
            </Box>
          </Grid>
          <Grid item xs={1.5}>
            <ModeCommentOutlinedIcon sx={{ pr: "10px", fontSize: "30px" }} />
          </Grid>
          <Grid item xs={8}>
            <SendOutlinedIcon sx={{ fontSize: "30px" }} />
          </Grid>
          <Grid item xs={1}>
            <TurnedInNotOutlinedIcon sx={{ fontSize: "30px" }} />
          </Grid>
        </Grid>
      </Box>
      {/* description */}
      <Box component="div" display="flex">
        <Box
          component="img"
          alt="Profile"
          src={File}
          sx={{ width: "1rem", borderRadius: "50%", mr: "5px" }}
        />
        <Box component="span">
          Liked by{" "}
          <Box component="span" fontSize="16px" fontWeight="600">
            {userLike}
          </Box>{" "}
          and{" "}
          <Box component="span" fontSize="16px" fontWeight="600">
            {like}
          </Box>{" "}
          others
        </Box>
      </Box>
      <Box component="div">
        <Box component="p">
          <Box component="span" fontWeight="600">
            {username}
          </Box>
          {Description}
        </Box>
      </Box>
    </Container>
  );
}

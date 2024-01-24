import React, { useContext } from "react";
import { Box, Grid, Container } from "@mui/material";
// context
import { AppContext } from "../../../../context/AppContext";
// icon
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";

export default function Posts() {
  const { user, username, post } = useContext(AppContext);
  // const post = user.posts;

  return (
    <Box component="div" py="10px" mb="40px">
      {/* head post */}
      <Container>
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
              src={user.img}
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
              {post.country}
            </Box>
          </Grid>
          <Grid item xs={1}>
            <MoreHorizIcon />
          </Grid>
        </Grid>
      </Container>
      {/* body post */}
      <Box
        component="img"
        alt="picPost"
        src={post[0].imageUrl}
        width="100%"
        height="25rem"
      />
      {/* more opstion post */}
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
            src={user.img}
            sx={{ width: "1rem", borderRadius: "50%", mr: "5px" }}
          />
          <Box component="span">
            Liked by{" "}
            <Box component="span" fontSize="16px" fontWeight="600">
              {post[0].userLike}
            </Box>{" "}
            and{" "}
            <Box component="span" fontSize="16px" fontWeight="600">
              {post[0].like}
            </Box>{" "}
            others
          </Box>
        </Box>
        <Box component="div">
          <Box component="p">
            <Box component="span" fontWeight="600">
              {username}
            </Box>{" "}
            lorem
            {post[0].description}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

import React, { useContext } from "react";
import { Box, Container } from "@mui/material";
// context
import { AppContext } from "../../../../context/AppContext";
// component
import HeadPost from "./components/HeadPost";
import BodyPost from "./components/BodyPost";
import MoreOpstionPost from "./components/MoreOpstionPost";

export default function Posts() {
  const { username, post } = useContext(AppContext);

  return (
    <Box component="div" py="10px" mb="40px">
      {post.map((post, index) => (
        <Box py="10px" mb="40px" key={index}>
          {/* head post */}
          <Container>
            <HeadPost
              username={username}
              country={post.Country}
              profileImg={post.profileImg}
            />
          </Container>
          {/* body post */}
          <BodyPost File={post.File} />
          {/* more opstion post */}
          <MoreOpstionPost
            Description={post.Description}
            File={post.File}
            like={post.like}
            userLike={post.userLike}
            username={username}
          />
        </Box>
      ))}
    </Box>
  );
}

import React, { useContext } from "react";
import { Container, Box } from "@mui/material";
import StoryComponent from "./StoryComponent";
import { AppContext } from "../../../../context/AppContext";

export default function Story() {
  const { user } = useContext(AppContext);
  const stories = user.storie;

  return (
    <Container sx={{ borderBottom: "solid #A6A6AA 1px", py: "10px" }}>
      <Box sx={{ display: "flex" }}>
        {stories.map((story, index) => (
          <Box key={index}>
            <StoryComponent
              alt={story.username}
              img={story.image}
              title={story.title}
            />
          </Box>
        ))}
      </Box>
    </Container>
  );
}

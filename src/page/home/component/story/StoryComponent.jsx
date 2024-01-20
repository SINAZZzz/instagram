import React from "react";
import { Box } from "@mui/material";

const StoryComponent = ({ alt, img, title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        mr: "1rem",
      }}
    >
      <Box className="spanStory" component="span">
        <Box
          component="img"
          alt={alt}
          sx={{
            width: "4rem",
            height: "4rem",
            borderRadius: "50%",
          }}
          src={img}
        />
      </Box>
      <Box component="span" sx={{ fontWeight: "400", fontSize: "14px" }}>
        {title}
      </Box>
    </Box>
  );
};

export default StoryComponent;

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
      <Box
        component="img"
        alt={alt}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "4rem",
          height: "4rem",
          borderRadius: "50%",
          // border: "solid 4px  rgb(210, 207, 207)",
        }}
        src={img}
      />
      <Box
        component="span"
        sx={{
          width: "4rem",
          height: "4rem",
          borderRadius: "50%",
          border: "solid 4px  rgb(210, 207, 207)",
          position: "absolute",
        }}
      ></Box>
      <Box component="span" sx={{ fontWeight: "400", fontSize: "14px" }}>
        {title}
      </Box>
    </Box>
  );
};

export default StoryComponent;

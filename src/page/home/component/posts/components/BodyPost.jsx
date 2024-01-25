import React from "react";
import { Box } from "@mui/material";

export default function BodyPost({ File }) {
  return (
    <Box component="img" alt="picPost" src={File} width="100%" height="25rem" />
  );
}

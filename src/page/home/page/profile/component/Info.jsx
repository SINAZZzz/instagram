import { Box, Grid } from "@mui/material";

export default function Info({ number, title }) {
  return (
    <Grid
      item
      xs={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box component="span">{number}</Box>
      <Box component="span">{title}</Box>
    </Grid>
  );
}

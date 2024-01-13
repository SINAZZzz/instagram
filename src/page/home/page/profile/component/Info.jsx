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
      <Box component="span" sx={{ fontSize: "16px", fontWeight: "600" }}>
        {number}
      </Box>
      <Box component="span" sx={{ fontSize: "16px", fontWeight: "400" }}>
        {title}
      </Box>
    </Grid>
  );
}

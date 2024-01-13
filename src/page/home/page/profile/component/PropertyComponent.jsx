import { Box, Grid } from "@mui/material";

export default function PropertyComponent({ name, desProfile }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box component="p" fontWeight="bold">
          {name}
        </Box>
        <Box component="p">{desProfile}</Box>
      </Grid>
    </Grid>
  );
}

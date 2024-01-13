import { Box, Grid } from "@mui/material";
import Info from "./Info";

export default function InfoComponent({ img, post, followers, following }) {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item xs={3}>
        <Box
          component="img"
          alt="Profile"
          src={img}
          sx={{ width: "5rem", borderRadius: "50%" }}
        />
      </Grid>
      <Info number={post} title="Posts" />
      <Info number={followers} title="Followers" />
      <Info number={following} title="Following" />
    </Grid>
  );
}

import { Box, Grid } from "@mui/material";
// icons
import MenuIcon from "@mui/icons-material/Menu";
import LockIcon from "@mui/icons-material/Lock";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function HeadProfile({ username }) {
  return (
    <Grid container spacing={1}>
      <Grid item xs={11}>
        <Box
          component="p"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LockIcon fontSize="samll" />
          {username}
          <ExpandMoreIcon />
        </Box>
      </Grid>
      <Grid
        item
        xs={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MenuIcon fontSize="large" />
      </Grid>
    </Grid>
  );
}

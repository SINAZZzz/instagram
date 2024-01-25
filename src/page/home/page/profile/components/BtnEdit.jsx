import { Box, Grid, Typography } from "@mui/material";

export default function BtnEdit() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              py: "10px",
              borderRadius: "5px",
              color: "#3C3C43",
              background: "#FFFFFF",
              fontWeight: "600",
              border: "solid 1px  rgb(210, 207, 207)",
              fontSize: "14px",
            }}
          >
            Edit Profile
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

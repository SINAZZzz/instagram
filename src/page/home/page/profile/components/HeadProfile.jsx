import { Box, Grid } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
// icons
import LockIcon from "@mui/icons-material/Lock";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function HeadProfile({ username }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
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
          <LockIcon fontSize="small" />
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
        <MenuIcon onClick={toggleSidebar} />
        <Sidebar isOpen={sidebarOpen} toggleDrawer={toggleSidebar} />
      </Grid>
    </Grid>
  );
}

import { Box, Grid, Tab, Card, CardMedia } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
//
import PersonIcon from "@mui/icons-material/Person";
import GridOnIcon from "@mui/icons-material/GridOn";
//
import { useState } from "react";

export default function TabPanelComponent({ posts }) {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        width: "100%",
        mt: "1rem",
        typography: "body1",
        borderTop: "solid 1px  rgb(210, 207, 207)",
      }}
    >
      <TabContext value={value}>
        <Box>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            variant="fullWidth"
          >
            <Tab label={<GridOnIcon />} value="1" />
            <Tab label={<PersonIcon />} value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ m: 0, p: 0 }}>
          <Grid container spacing={0.5}>
            {posts.map((post) => (
              <Grid item xs={4} md={4} lg={3} key={post.id}>
                <Card
                  sx={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    cursor: "pointer",
                  }}
                >
                  <CardMedia
                    image={post.imageUrl}
                    title={post.caption}
                    sx={{ height: 0, paddingTop: "100%" }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value="2"></TabPanel>
      </TabContext>
    </Box>
  );
}

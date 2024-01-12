import { useContext } from "react";
import BtnNavigation from "../../component/btnNavigation/btnNavigation";
import { Box, Grid, Container, Typography } from "@mui/material";
import { AppContext } from "../../../../context/AppContext";
import MenuIcon from "@mui/icons-material/Menu";
import LockIcon from "@mui/icons-material/Lock";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Info from "./component/Info";
import AddIcon from "@mui/icons-material/Add";
import Story from "./component/Story";
import PicSorty from "../../../../assets/user.jpg";
import AddSortyIcon from "../../../../assets/icons/Shape.png";

export default function Profile() {
  const { user } = useContext(AppContext);
  return (
    <div>
      <Container>
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
              {user.username}
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
              src={user.img}
              sx={{ width: "5rem", borderRadius: "50%" }}
            />
          </Grid>
          <Info number={user.posts} title="Posts" />
          <Info number={user.followers} title="Followers" />
          <Info number={user.following} title="Following" />
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box component="p" fontWeight="bold">
              {user.name}
            </Box>
            <Box component="p">{user.desProfile}</Box>
          </Grid>
        </Grid>
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
        <Box
          component="div"
          sx={{
            display: "flex",
            mt: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              mr: "1rem",
            }}
          >
            <Box
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "4rem",
                height: "4rem",
                borderRadius: "50%",
                border: "solid 1px  rgb(210, 207, 207)",
              }}
            >
              <AddIcon fontSize="large" />
            </Box>
            <Box component="span" sx={{ fontWeight: "400", fontSize: "12px" }}>
              New
            </Box>
          </Box>
          <Story img={PicSorty} title="Friends" />
          <Story img={PicSorty} title="Sport" />
          <Story img={PicSorty} title="Design" />
        </Box>
      </Container>
      <BtnNavigation />
    </div>
  );
}

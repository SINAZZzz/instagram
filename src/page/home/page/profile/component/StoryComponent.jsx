// mui
import { Box } from "@mui/material";
// icons
import AddIcon from "@mui/icons-material/Add";
// component
import Story from "./Story";
// img
import PicSorty from "../../../../../assets/user.jpg";

export default function StoryComponent() {
  return (
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
  );
}

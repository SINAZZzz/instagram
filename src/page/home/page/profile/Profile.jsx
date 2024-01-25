import { useContext } from "react";
// mui
import { Box, Container } from "@mui/material";
// context
import { AppContext } from "../../../../context/AppContext";
// component
import BtnNavigation from "../../component/btnNavigation/btnNavigation";

// img
import TabPanelComponent from "./components/TabPanel";
import StoryComponent from "./components/StoryComponent";
import BtnEdit from "./components/BtnEdit";
import InfoComponent from "./components/InfoComponent";
import PropertyComponent from "./components/PropertyComponent";
import HeadProfile from "./components/HeadProfile";

export default function Profile() {
  const { user, username, post } = useContext(AppContext);

  return (
    <Box component="div" sx={{ width: "100%", pb: "65px" }}>
      <Container>
        <HeadProfile username={username} />
        <InfoComponent
          img={user.img}
          post={user.post}
          followers={user.followers}
          following={user.following}
        />
        <PropertyComponent name={user.name} desProfile={user.desProfile} />
        <BtnEdit />
        <StoryComponent />
      </Container>
      <TabPanelComponent posts={post} />
      <BtnNavigation />
    </Box>
  );
}

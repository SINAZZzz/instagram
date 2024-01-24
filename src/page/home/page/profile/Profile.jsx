import { useContext } from "react";
// mui
import { Box, Container } from "@mui/material";
// context
import { AppContext } from "../../../../context/AppContext";
// component
import BtnNavigation from "../../component/btnNavigation/btnNavigation";

// img
import TabPanelComponent from "./component/TabPanel";
import StoryComponent from "./component/StoryComponent";
import BtnEdit from "./component/BtnEdit";
import InfoComponent from "./component/InfoComponent";
import PropertyComponent from "./component/PropertyComponent";
import HeadProfile from "./component/HeadProfile";

export default function Profile() {
  const { user, username, post } = useContext(AppContext);
  // const post = user.posts;

  return (
    <Box component="div" sx={{ width: "100%" }}>
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

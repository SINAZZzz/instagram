import { useContext } from "react";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
// icons
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function BtnNavigation() {
  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        borderTop: "solid 1px  rgb(210, 207, 207)",
        background: "white",
      }}
      showLabels
    >
      <BottomNavigationAction icon={<HomeIcon />} href="/home" />
      <BottomNavigationAction icon={<SearchIcon />} href="/search" />
      <BottomNavigationAction icon={<AddCircleOutlineIcon />} href="/addPost" />
      <BottomNavigationAction icon={<FavoriteBorderIcon />} href="/likes" />
      <BottomNavigationAction icon={<AccountCircleIcon />} href="/profile" />
    </BottomNavigation>
  );
}

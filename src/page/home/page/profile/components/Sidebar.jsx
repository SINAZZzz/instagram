import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, toggleDrawer }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };
  return (
    <Drawer anchor="right" open={isOpen} onClose={toggleDrawer}>
      <List>
        <ListItem button key="Logout" onClick={logout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;

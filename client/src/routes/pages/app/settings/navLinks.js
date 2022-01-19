import { ListItem, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

import "./navLink.css";

const activeStyle = ({ isActive }) =>
  isActive
    ? {
        width: "100%",
        color: "black",
        padding: 15,
        backgroundColor: "#DADADA",
        textDecoration: "none",
        fontWeight: 600,
        borderRadius: 15,
      }
    : {
        width: "100%",
        color: "black",
        padding: 15,
        backgroundColor: "white",
        textDecoration: "none",
      };

const links = [
  <NavLink className={"link"} to="/app/settings/details" style={activeStyle}>
    User Details
  </NavLink>,
  <NavLink className={"link"} to="/app/settings/password" style={activeStyle}>
    Password
  </NavLink>,
  <NavLink className={"link"} to="/#" style={activeStyle}>
    Notifications
  </NavLink>,
  <NavLink className={"link"} to="/#" style={activeStyle}>
    Link 2
  </NavLink>,
  <NavLink className={"link"} to="/#" style={activeStyle}>
    Link 3
  </NavLink>,
];

export default function NavLinks() {
  return (
    <Grid
      item
      textAlign={"left"}
      mt={3}
      sx={{ border: "2px solid rgb(128, 128, 128, 0.4)", borderRadius: 4, display: {xs: "none", sm: "grid"} }}
      sm={4}
    >
      {links.map((item, i) => (
        <ListItem className="link-list" key={i}>
          {item}
        </ListItem>
      ))}
    </Grid>
  );
}

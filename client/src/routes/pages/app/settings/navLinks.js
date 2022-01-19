import { ListItem, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

import "./navLink.css";

const activeStyle = ({ isActive }) =>
  isActive
    ? {
        width: "100%",
        color: "white",
        padding: 10,
        backgroundColor: "black",
        textDecoration: "none",
        fontWeight: 600,
        borderRadius: 10,
      }
    : {
        width: "100%",
        color: "black",
        padding: 10,
        backgroundColor: "white",
        textDecoration: "none",
        borderRadius: 10,
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
      sx={{ display: { xs: "none", sm: "block" } }}
      sm={4}
    >
      <div
        style={{
          border: "1px solid rgb(128, 128, 128, 0.4)",
          backgroundColor: "#DADADA",
          borderRadius: "15px",
        }}
      >
        <Typography
          m={2}
          variant="h5"
          align="center"
          sx={{ fontWeight: "bold" }}
        >
          Settings
        </Typography>
        {links.map((item, i) => (
          <ListItem className="link-list" key={i}>
            {item}
          </ListItem>
        ))}
      </div>
    </Grid>
  );
}

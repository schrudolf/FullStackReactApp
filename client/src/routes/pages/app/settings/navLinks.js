import { ListItem } from "@mui/material";
import { NavLink } from "react-router-dom";

import  "./navLink.css"

const activeStyle = ({ isActive }) =>
  isActive
    ? {
        width: "100%",
        color: "black",
        padding: 12,
        backgroundColor: "#DADADA",
        textDecoration: "none",
        fontWeight: 800,
        borderRadius: 10,
      }
    : {
        width: "100%",
        color: "black",
        padding: 12,
        backgroundColor: "white",
        textDecoration: "none",
        fontWeight: 600,
      };

const links = [
  <NavLink className={"link"} to="/app/settings/account" style={activeStyle}>
    Profile
  </NavLink>,
  <NavLink className={"link"} to="/app/settings/password" style={activeStyle}>
    Password
  </NavLink>,
  <NavLink className={"link"} to="/#" style={activeStyle}>
    Link 1
  </NavLink>,
  <NavLink className={"link"} to="/#" style={activeStyle}>
    Link 2
  </NavLink>,
  <NavLink className={"link"} to="/#" style={activeStyle}>
    Link 3
  </NavLink>,
];

export default function NavLinks() {
  return links.map((item, i) => <ListItem className="link-list" key={i}>{item}</ListItem>);
}

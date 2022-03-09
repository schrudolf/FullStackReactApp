import { ListItem, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

import "./navLink.css";

const links = [
  <NavLink className="link" to="/app/settings/profile">
    User Profile
  </NavLink>,
  <NavLink className="link" to="/app/settings/details">
    User Details
  </NavLink>,
  <NavLink className="link" to="/app/settings/password">
    Password
  </NavLink>,
];

export default function NavLinks() {
  return (
    <Grid item mt={3} sx={{ display: { xs: "none", sm: "block" } }} sm={4}>
      <div className="settings_nav">
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

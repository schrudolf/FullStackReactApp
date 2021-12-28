import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <AppBar position="absolute" sx={{display: {width: "100%", marginTop: "100vh", backgroundColor: "black"}}}>
          <Container maxWidth="xl">
            <Toolbar>
              <Typography variant="body1" margin={"auto"} color="inherit">
                FullStackReactApp
              </Typography>
            </Toolbar>
            <Toolbar>
              <Typography variant="body2" margin={"auto"} color="inherit">
              © 2021 schrudolf
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
  );
}

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const date = new Date();

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
              © {date.getUTCFullYear()} <Link href="https://github.com/schrudolf" color="inherit">schrudolf</Link>
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
  );
}

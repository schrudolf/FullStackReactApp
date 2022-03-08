import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link";
import { Box } from "@mui/system";

const date = new Date();

export default function Footer() {
  return (
    <footer style={{ position: "absolute", bottom: 0, width: "100%", height: "60px"}}>
      <Box
        pt={3}
        sx={{display: { backgroundColor: "black", color: "white"}}}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Privacy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Account</Box>
              <Box>
                <Link href="/login" color="inherit">
                  Login
                </Link>
              </Box>
              <Box>
                <Link href="/register" color="inherit">
                  Register
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Messages</Box>
              <Box>
                <Link href="/" color="inherit">
                  Backup
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  History
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Roll
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 1, sm: 3 }} pb={{ xs: 3, sm: 0 }}>
          <Typography variant="body1" margin={"auto"} color="inherit">
              FullStackReactApp
           </Typography>
          </Box>
          <Box textAlign="center" pt={{ xs: 1, sm: 2 }} pb={{ xs: 2, sm: 0 }}>
          © {date.getUTCFullYear()} <Link href="https://github.com/schrudolf" color="inherit">schrudolf</Link>
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
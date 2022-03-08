import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/system";

import "./footer.css";

const date = new Date();

export default function Footer() {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Content One</Box>
            <Box>
              <Link href="/" color="inherit">
                Link One
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Link Two
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Link Three
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Content Two</Box>
            <Box>
              <Link href="/" color="inherit">
                Link One
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Link Two
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Link Three
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Content Three</Box>
            <Box>
              <Link href="/" color="inherit">
                Link One
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Link Two
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Link Three
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
          © {date.getUTCFullYear()}{" "}
          <Link href="https://github.com/schrudolf" color="inherit">
            schrudolf
          </Link>
        </Box>
      </Container>
    </footer>
  );
}

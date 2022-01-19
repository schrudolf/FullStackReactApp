import { useState } from "react";
import { Grid, Container, Button, TextField, Typography } from "@mui/material/";

import NavLinks from "./navLinks";

import AppHeader from "../../../../components/app/appHeader";
import Footer from "../../../../components/home/footer";

export default function AccountProfile() {
  const [detailsChanged, setdetailsChanged] = useState(false);
  return (
    <div>
      <AppHeader />
      <Container maxWidth="lg">
        <Grid container>
          <Grid item textAlign={"left"} xs={12} sm={8}>
            <Container>
              <h1>Profile</h1>
              <Grid container>
                <Grid item xs={6}>
                  <Typography variant="h6">Registered</Typography>
                  <Typography variant="h6">Last login</Typography>
                  <Typography variant="h6">Last ip address</Typography>
                  <Typography variant="h6">Email active</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography textAlign={"right"} variant="h6">
                    2000.00.01
                  </Typography>
                  <Typography textAlign={"right"} variant="h6">
                    2000.00.01
                  </Typography>
                  <Typography textAlign={"right"} variant="h6">
                    120.0.0.1
                  </Typography>
                  <Typography textAlign={"right"} variant="h6">
                    Yes
                  </Typography>
                </Grid>
              </Grid>

              <TextField
                fullWidth
                margin="dense"
                label="Email address"
                placeholder="Email address"
                name="email_address"
                id="email_address"
                type="email"
                required
              />
              {detailsChanged ? (
                <Button
                  type="submit"
                  size="large"
                  fullWidth
                  variant="contained"
                  color="info"
                >
                  Save Changes
                </Button>
              ) : (
                <Button
                  type="submit"
                  size="large"
                  fullWidth
                  variant="contained"
                  color="info"
                  disabled
                >
                  Save Changes
                </Button>
              )}
            </Container>
          </Grid>
          <NavLinks />
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

import { useState } from "react";
import { Grid, Container, Button, TextField } from "@mui/material/";

import NavLinks from "./navLinks";

import AppHeader from "../../../../components/app/appHeader";
import Footer from "../../../../components/home/footer";

export default function AccountDetails() {
  const [detailsChanged, setdetailsChanged] = useState(false);
  return (
    <div>
      <AppHeader />
      <Container maxWidth="lg">
        <Grid container>
          <Grid item textAlign={"left"} xs={12} sm={8}>
            <Container>
              <h1>User Details</h1>
              <TextField
                fullWidth
                margin="dense"
                placeholder="Email address"
                name="email"
                id="email"
                type="email"
                required
              />
              <TextField
                fullWidth
                margin="dense"
                placeholder="First Name"
                name="first_name"
                id="first_name"
                type="text"
                required
              />
              <TextField
                fullWidth
                margin="dense"
                placeholder="Last Name"
                name="last_name"
                id="last_name"
                type="text"
                required
              />
              <TextField
                fullWidth
                margin="dense"
                placeholder="Country"
                name="country"
                id="country"
                type="text"
                required
              />
              <TextField
                fullWidth
                margin="dense"
                placeholder="City"
                name="city"
                id="city"
                type="text"
                required
              />
              <TextField
                fullWidth
                margin="dense"
                placeholder="Zip Code"
                name="zip_code"
                id="zip_code"
                type="text"
                required
              />
              <TextField
                fullWidth
                margin="dense"
                placeholder="Address"
                name="address"
                id="address"
                type="text"
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

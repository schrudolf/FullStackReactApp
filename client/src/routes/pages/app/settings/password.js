import { useState } from "react";
import { Grid, Container, TextField, Button } from "@mui/material/";
import NavLinks from "./navLinks";

import AppHeader from "../../../../components/app/appHeader";
import Footer from "../../../../components/home/footer";

export default function AccountPassword() {
  const [detailsChanged, setdetailsChanged] = useState(false);
  return (
    <div>
      <AppHeader />
      <Container maxWidth="lg">
        <Grid container>
          <Grid item textAlign={"left"} xs={12} sm={8}>
            <Container>
              <h1>Change Password</h1>
              <TextField
                fullWidth
                margin="dense"
                label="Actual password"
                placeholder="Actual password"
                name="actual_password"
                id="actual_password"
                type="password"
                required
              />
              <TextField
                fullWidth
                margin="dense"
                label="New password"
                placeholder="New password"
                name="new_password"
                id="new_password"
                type="password"
                required
              />
              <TextField
                fullWidth
                margin="dense"
                label="New password again"
                placeholder="New password again"
                name="new_password2"
                id="new_password2"
                type="password"
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
                  Confirm
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
                  Confirm
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

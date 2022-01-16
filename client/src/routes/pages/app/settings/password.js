import { Grid, Container } from "@mui/material/";

import NavLinks from "./navLinks";

import AppHeader from "../../../../components/app/appHeader";
import Footer from "../../../../components/home/footer";

export default function PasswordSettings() {
  return (
    <div>
      <AppHeader />
      <Container maxWidth="lg">
        <Grid container>
          <Grid item textAlign={"left"} xs={8}>
            <h1>Change Password</h1>
          </Grid>
          <Grid
            item
            textAlign={"left"}
            mt={3}
            sx={{ border: "1px solid black", borderRadius: 4 }}
            xs={4}
          >
            <NavLinks />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

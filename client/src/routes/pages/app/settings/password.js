import { Grid, Container } from "@mui/material/";

import NavLinks from "./navLinks";

import AppHeader from "../../../../components/app/appHeader";
import Footer from "../../../../components/home/footer";

export default function AccountPassword() {
  return (
    <div>
      <AppHeader />
      <Container maxWidth="lg">
        <Grid container>
          <Grid item textAlign={"left"} xs={12} sm={8}>
            <h1>Change Password</h1>
          </Grid>
          <NavLinks />
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

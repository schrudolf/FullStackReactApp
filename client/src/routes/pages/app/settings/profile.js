import { useState, useEffect } from "react";
import { Grid, Container, Button, TextField, Typography } from "@mui/material/";

import NavLinks from "./navLinks";
import LoadingButton from "../../../../components/ui/loadingButton";
import PageLoading from "../../../../components/ui/pageLoading";
import createNewAxios from "../../../../axios/axios";

import AppHeader from "../../../../components/app/appHeader";
import Footer from "../../../../components/home/footer";

export default function AccountProfile() {
  const [detailsChanged, setdetailsChanged] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);
  const [userProfile, setUserProfile] = useState({
    data: null,
    isReady: false,
  });
  function checkUserEmailField(){
    const userEmailField = document.getElementById("email_address");
    if(userEmailField.value !== userProfile.data.email){
      setdetailsChanged(true)
    }else{
      setdetailsChanged(false)
    }
  }
  const getUserProfileData = async () => {
    const response = await createNewAxios("/app/settings/profile", "GET");
    if (response.status === 200) {
      setUserProfile({
        data: response.data,
        isReady: true,
      });
    }
    const userEmailField = document.getElementById("email_address");
    userEmailField.value = response.data.email;
  };
  useEffect(() => {
    getUserProfileData();
  }, []);
  if (!userProfile.isReady) {
    return (
      <div>
        <AppHeader />
        <PageLoading />;
        <Footer />
      </div>
    );
  } else {
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
                    <Typography variant="h6">Current IP Address</Typography>
                    <Typography variant="h6">Email active</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography textAlign={"right"} variant="h6">
                      {userProfile.data.registered}
                    </Typography>
                    <Typography textAlign={"right"} variant="h6">
                    {userProfile.data.ip_address}
                    </Typography>
                    <Typography textAlign={"right"} variant="h6">
                      {userProfile.data.activated === 1 ? "Yes" : "No"}
                    </Typography>
                  </Grid>
                </Grid>
                <TextField
                  fullWidth
                  onChange={checkUserEmailField}
                  margin="dense"
                  label="Email address"
                  placeholder="Email address"
                  name="email_address"
                  id="email_address"
                  type="email"
                  required
                />
                <p
                  style={{ margin: 10, textAlign: "center" }}
                  id="response_msg"
                ></p>
                {loadingButton ? (
                  <LoadingButton />
                ) : detailsChanged ? (
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
                    Save changes
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
}

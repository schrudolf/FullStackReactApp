import { useState, useEffect } from "react";
import { Grid, Container, Button, TextField, Typography } from "@mui/material/";

import NavLinks from "./navLinks";
import LoadingButton from "../../../../components/ui/loadingButton";
import PageLoading from "../../../../components/ui/pageLoading";
import createNewAxios from "../../../../axios/axios";

export default function AccountProfile() {
  const [detailsChanged, setdetailsChanged] = useState(false);
  const [getData, setGetData] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);
  const [userProfile, setUserProfile] = useState({
    data: null,
    isReady: false,
  });

  async function sendNewEmailToServer(e) {
    e.preventDefault();
    setLoadingButton(true);
    const [new_email, current_password, response_msg] =
      document.querySelectorAll(
        "#email_address, #current_password, #response_msg"
      );
    const response = await createNewAxios("/app/settings/profile", "POST", {
      email: new_email.value,
      password: current_password.value,
    });
    setLoadingButton(false);
    if (response.status === 200 && response.data.success) {
      response_msg.style.color = "green";
      response_msg.innerHTML = response.data.msg;
      // set button to disabled
      setdetailsChanged(false);
      current_password.value = "";
      //Get fresh data
      setGetData(true);
      setTimeout(() => {
        window.location.replace("/app/logout");
      }, 5000);
    } else {
      response_msg.style.color = "red";
      response_msg.innerHTML = response.data.msg;
    }
  }

  function checkUserEmailField() {
    const [new_email, current_password, response_msg] =
      document.querySelectorAll(
        "#email_address, #current_password, #response_msg"
      );
    if (response_msg.innerHTML !== "") {
      response_msg.innerHTML = "";
    }
    //if input value default and no password disable button
    if (
      new_email.value !== userProfile.data.email &&
      current_password.value.length > 0
    ) {
      setdetailsChanged(true);
    } else {
      setdetailsChanged(false);
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
  }, [getData]);

  if (!userProfile.isReady) {
    return (
      <div>
        <PageLoading />;
      </div>
    );
  } else {
    return (
      <div>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item textAlign={"left"} xs={12} sm={8}>
              <Container>
                <h1>Profile</h1>
                <Grid container>
                  <Grid item xs={12} mb={2}>
                    <Grid item xs={12}>
                      <Typography variant="h6">
                        Registered: {userProfile.data.registered}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h6">
                        Current IP Address: {userProfile.data.ip_address}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h6">
                        Email active:{" "}
                        {userProfile.data.activated === 1 ? (
                          <span style={{ color: "green" }}>Yes</span>
                        ) : (
                          <span style={{ color: "red" }}>No</span>
                        )}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}></Grid>
                </Grid>
                <form onSubmit={sendNewEmailToServer}>
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
                  <TextField
                    fullWidth
                    onChange={checkUserEmailField}
                    margin="dense"
                    label="Current password"
                    placeholder="Current password"
                    name="current_password"
                    id="current_password"
                    type="password"
                    required
                  />
                  {detailsChanged && (
                    <p style={{ color: "red" }}>
                      You will be logged out after successfully changing your
                      email address. And you need to reactivate it via email
                    </p>
                  )}
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
                      Save change
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
                      Save change
                    </Button>
                  )}
                </form>
              </Container>
            </Grid>
            <NavLinks />
          </Grid>
        </Container>
      </div>
    );
  }
}

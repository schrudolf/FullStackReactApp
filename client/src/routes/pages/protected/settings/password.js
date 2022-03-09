import { useState } from "react";
import { Grid, Container, TextField, Button } from "@mui/material/";
import LockIcon from "@mui/icons-material/Lock";
import IconButton from "@mui/material/IconButton";
import NavLinks from "./navLinks";
import createNewAxios from "../../../../axios/axios";
import LoadingButton from "../../../../components/ui/loadingButton";
import "./form.css"

export default function AccountPassword() {
  const [detailsChanged, setdetailsChanged] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);

  async function sendNewPasswordToServer(e) {
    e.preventDefault();
    setLoadingButton(true);
    const [current_password, new_password, new_password2, response_msg] =
      document.querySelectorAll(
        "#current_password, #new_password, #new_password2, #response_msg"
      );
    setdetailsChanged(true);
    const response = await createNewAxios("/app/settings/password", "POST", {
      currentPassword: current_password.value,
      newPassword: new_password.value,
      newPassword2: new_password2.value,
    });
    setLoadingButton(false);
    response_msg.classList.remove("response_msg_success")
    if (response.status === 200 && response.data.success) {
      response_msg.classList.add("response_msg_success")
      response_msg.innerHTML = response.data.msg;
      // set button to disabled
      setdetailsChanged(false);
      current_password.value = "";
      new_password.value = "";
      new_password2.value = "";
    } else {
      response_msg.innerHTML = response.data.msg;
    }
  }

  function checkUserPasswordField() {
    const [current_password, new_password, new_password2, response_msg] =
      document.querySelectorAll(
        "#current_password, #new_password, #new_password2, #response_msg"
      );
    if (response_msg.innerHTML !== "") {
      response_msg.innerHTML = "";
    }
    //if input value default and no password disable button
    if (
      current_password.value.length > 0 &&
      new_password.value.length > 0 &&
      new_password2.value.length > 0
    ) {
      setdetailsChanged(true);
    } else {
      setdetailsChanged(false);
    }
  }

  return (
    <div className="form">
      <Container maxWidth="lg">
        <Grid container>
          <Grid item textAlign={"left"} xs={12} sm={8}>
            <Container>
              <h1>Change Password</h1>
              <form onSubmit={sendNewPasswordToServer}>
                <TextField
                  className="input_icon_settings"
                  fullWidth
                  onChange={checkUserPasswordField}
                  margin="dense"
                  placeholder="Current password"
                  name="current_password"
                  id="current_password"
                  type="password"
                  required
                  InputProps={{
                    startAdornment: (
                      <IconButton disabled tabIndex={-1}>
                        <LockIcon />
                      </IconButton>
                    ),
                  }}
                />
                <TextField
                  className="input_icon_settings"
                  fullWidth
                  onChange={checkUserPasswordField}
                  margin="dense"
                  placeholder="New password"
                  name="new_password"
                  id="new_password"
                  type="password"
                  required
                  InputProps={{
                    startAdornment: (
                      <IconButton disabled tabIndex={-1}>
                        <LockIcon />
                      </IconButton>
                    ),
                  }}
                />
                <TextField
                  className="input_icon_settings"
                  fullWidth
                  onChange={checkUserPasswordField}
                  margin="dense"
                  placeholder="New password again"
                  name="new_password2"
                  id="new_password2"
                  type="password"
                  required
                  InputProps={{
                    startAdornment: (
                      <IconButton disabled tabIndex={-1}>
                        <LockIcon />
                      </IconButton>
                    ),
                  }}
                />
                <p
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
                    Change Password
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
                    Change Password
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

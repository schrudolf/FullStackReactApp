import { useState, useEffect } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  TextField,
  IconButton,
  Button,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import PageLoading from "../../../../components/ui/pageLoading";
import LoadingButton from "../../../../components/ui/loadingButton";
import createNewAxios from "../../../../axios/axios";
import "./form.css"

// if valid link and token not expired render the newPassword component (status 204 not valid or expired. status 200 volid token)
export default function NewPassword() {
  const [loadingButton, setLoadingButton] = useState(false);
  const [responseStatus, setResponseStatus] = useState();
  const redirect = useNavigate();
  // get the tokenid from route params
  const { tokenid } = useParams();

  const tokenCheck = async () => {
    const response = await createNewAxios("/forgot/" + tokenid, "get");
    setResponseStatus(response.status);
  };

  useEffect(() => {
    tokenCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function sendNewPassword(e) {
    e.preventDefault();
    setLoadingButton(true);
    const password = document.getElementById("password");
    const password2 = document.getElementById("password2");
    const response_msg = document.getElementById("response_msg");
    const response = await createNewAxios(
      `/forgot/${tokenid}/newpassword`,
      "post",
      {
        password: password.value,
        password2: password2.value,
      }
    );

    response_msg.innerHTML = "";
    response_msg.classList.remove("response_msg_success");
    setLoadingButton(false);
    if (response.status === 200 && response.data.success) {
      password.value = "";
      password2.value = "";
      response_msg.classList.add("response_msg_success");
      response_msg.innerHTML = response.data.msg;
      setTimeout(() => {
        redirect("/login");
      }, 3000);
    } else {
      response_msg.innerHTML = response.data.msg;
    }
  }
  // status ok from server 200+
  if (responseStatus >= 200) {
    // if invalid token or expired 204 status
    if (responseStatus > 200) {
      return <Navigate to="/forgot" />;
      // if valid and not expired -> token status 200. Rendering newPassword component
    } else {
      return (
        <div className="form">
          <Container className="form_body" maxWidth="xs">
            <Box>
              <Typography
                m={5}
                component="h1"
                variant="h5"
                sx={{ fontWeight: "bold" }}
              >
                New Password
              </Typography>
              <form onSubmit={sendNewPassword}>
                <TextField
                  className="input_icon_settings"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Password"
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
                  margin="normal"
                  required
                  fullWidth
                  name="password2"
                  id="password2"
                  type="password"
                  placeholder="Password again"
                  InputProps={{
                    startAdornment: (
                      <IconButton disabled tabIndex={-1}>
                        <LockIcon />
                      </IconButton>
                    ),
                  }}
                />
                <p id="response_msg"></p>
                {loadingButton ? (
                  <LoadingButton />
                ) : (
                  <Button
                    type="submit"
                    size="large"
                    fullWidth
                    variant="contained"
                    color="info"
                  >
                    Confirm
                  </Button>
                )}
              </form>
            </Box>
          </Container>
        </div>
      );
    }
  } else {
    return <PageLoading />;
  }
}

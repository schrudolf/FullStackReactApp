import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

import LoadingButton from "../../../../components/ui/loadingButton";
import createNewAxios from "../../../../axios/axios";
import "./form.css"

export default function Login({ isLogged, setIsLogged }) {
  const [loadingButton, setLoadingButton] = useState(false);
  const activationMsg = JSON.parse(localStorage.getItem("response"));

  async function userLogin(e) {
    e.preventDefault();
    setLoadingButton(true);

    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const response_msg = document.getElementById("response_msg");
    const response = await createNewAxios("/login", "post", {
      email: email.value,
      password: password.value,
    });
    response_msg.innerHTML = "";
    setLoadingButton(false);
    if (response.status === 200 && response.data.success) {
      setIsLogged(!isLogged);
    } else {
      response_msg.innerHTML = response.data.msg;
    }
  }
  // if the user click activation link in the email. This will show response messages after redirect from activation route
  const checkActivationMessage = () => {
    let response_msg = document.getElementById("response_msg");
    response_msg.classList.remove("response_msg_success")
    if (
      activationMsg !== null &&
      !(typeof activationMsg.msg === "undefined") &&
      activationMsg.success
    ) {
      response_msg.innerHTML = activationMsg.msg;
      response_msg.classList.add("response_msg_success")
    }
    if (
      activationMsg !== null &&
      !(typeof activationMsg.msg === "undefined") &&
      !activationMsg.success
    ) {
      response_msg.innerHTML = activationMsg.msg;
    }
    localStorage.setItem("response", JSON.stringify({}));
  };

  useEffect(() => {
    checkActivationMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="form">
      <Container
        className="form_body"
        maxWidth="xs"
      >
        <Box>
          <Typography
            m={5}
            component="h1"
            variant="h5"
            sx={{ fontWeight: "bold" }}
          >
            Log in
          </Typography>
          <form onSubmit={userLogin}>
            <TextField
              className="input_icon_settings"
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              type="email"
              autoFocus
              placeholder="Email"
              InputProps={{
                startAdornment: (
                  <IconButton disabled tabIndex={-1}>
                    <EmailIcon />
                  </IconButton>
                ),
              }}
            />
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
            <p
              id="response_msg"
            ></p>
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
                Sign in
              </Button>
            )}
            <div className="form_links">
              <span>or </span>
              <Link href="/forgot" variant="body2">
                Forgot password
              </Link>
            </div>
            <span>Don't have an account? </span>
            <Link href="/register" variant="body2">
              Sign up
            </Link>
          </form>
        </Box>
      </Container>
    </div>
  );
}

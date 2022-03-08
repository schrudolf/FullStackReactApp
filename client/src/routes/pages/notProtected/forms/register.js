import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

export default function Register() {
  const [loadingButton, setLoadingButton] = useState(false);
  const redirect = useNavigate();

  async function userRegister(e) {
    e.preventDefault();
    setLoadingButton(true);
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const password2 = document.getElementById("password2");
    const response_msg = document.getElementById("response_msg");
    const response = await createNewAxios("/register", "post", {
      email: email.value,
      password: password.value,
      password2: password2.value,
    });
    response_msg.innerHTML = "";
    response_msg.classList.remove("response_msg_success")
    setLoadingButton(false);
    if (response.status === 200 && response.data.success) {
      email.value = "";
      password.value = "";
      password2.value = "";
      response_msg.classList.add("response_msg_success")
      response_msg.innerHTML = response.data.msg;
      setTimeout(() => {
        redirect("/login");
      }, 3000);
    } else {
      response_msg.innerHTML = response.data.msg;
    }
  }
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
            Sign up
          </Typography>
          <form onSubmit={userRegister}>
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
                Sign up
              </Button>
            )}
            <div className="form_links">
              <Link href="/forgot" variant="body2">
                Forgot password
              </Link>
            </div>
            <span>Already have an account? </span>
            <Link href="/login" variant="body2">
              Log In
            </Link>
          </form>
        </Box>
      </Container>
    </div>
  );
}

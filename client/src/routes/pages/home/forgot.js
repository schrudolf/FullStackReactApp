import {useState} from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";

import LoadingButton from "../../../components/ui/loadingButton";
import createNewAxios from "../../../axios/axios";

export default function Forgot() {
  const [loadingButton, setLoadingButton] = useState(false);

  async function userForgot(e) {
    e.preventDefault();
    setLoadingButton(true);

    const email = document.getElementById("email");
    const response_msg = document.getElementById("response_msg");

    const response = await createNewAxios("/forgot", "post", {
      email: email.value,
    });

    response_msg.innerHTML = "";
    setLoadingButton(false);
    if (response.status === 200 && response.data.success) {
      email.value = "";
      response_msg.style.color = "green";
      response_msg.innerHTML = response.data.msg;
      // set isLogged value === true and redirect to protected route
    } else {
      response_msg.style.color = "red";
      response_msg.innerHTML = response.data.msg;
    }
  }

  return (
      <div style={{ padding: 3 }}>
        <Container
          maxWidth="xs"
          sx={{
            p: 1,
            display: {
              marginTop: "5%",
              textAlign: "center",
              backgroundColor: "#dce1e3",
              borderRadius: 10,
            },
          }}
        >
          <Box>
          <Typography m={5} component="h1" variant="h5" sx={{ fontWeight: 'bold' }}>
              Forgot Password
            </Typography>
            <form onSubmit={userForgot}>
              <TextField
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
                sx={{
                  backgroundColor: "white",
                  borderRadius: 1,
                }}
              />
              <p
                style={{ margin: 10, textAlign: "center" }}
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
                  Reset Password
                </Button>
              )}
              <div style={{ margin: 5 }}>
                <span>or </span>
                <Link href="/login" variant="body2">
                  Log in
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

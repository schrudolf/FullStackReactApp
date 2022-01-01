import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from '@mui/icons-material/Lock';

import Header from "../../../components/home/header";
import Footer from "../../../components/home/footer";

export default function Login() {
  return (
    <div>
      <Header />
      <div style={{ padding: 3 }}>
        <Container
          maxWidth="xs"
          sx={{
            p: 1,
            display: {
              position: "relative",
              top: "15vh",
              textAlign: "center",
              backgroundColor: "#dce1e3",
              borderRadius: 10,
            },
          }}
        >
          <Box>
          <Typography m={5} component="h1" variant="h5" sx={{ fontWeight: 'bold' }}>
            Log in
          </Typography>
            <form>
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
                    <IconButton tabIndex={-1}>
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
                style={{ margin: 0, textAlign: "center" }}
                id="emailAnswer"
              ></p>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                id="password"
                type="password"
                placeholder="Password"
                InputProps={{
                    startAdornment: (
                      <IconButton tabIndex={-1}>
                        <LockIcon />
                      </IconButton>
                    ),
                  }}
                sx={{
                  backgroundColor: "white",
                  borderRadius: 1,
                }}
              />
              <p
                style={{ margin: 0, textAlign: "center" }}
                id="passwordAnswer"
              ></p>
              <Button type="submit" size="large" fullWidth variant="contained" color="info">
                Log in
              </Button>
              <div style={{ margin: 5 }}>
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
      <Footer />
    </div>
  );
}

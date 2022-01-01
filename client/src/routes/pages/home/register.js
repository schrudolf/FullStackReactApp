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

export default function Register() {
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
              top: "10vh",
              textAlign: "center",
              backgroundColor: "#dce1e3",
              borderRadius: 10,
            },
          }}
        >
          <Box>
          <Typography m={5} component="h1" variant="h5" sx={{ fontWeight: 'bold' }}>
            Sign up
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
                    <IconButton>
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
                      <IconButton>
                        <LockIcon />
                      </IconButton>
                    ),
                  }}
                sx={{
                  backgroundColor: "white",
                  borderRadius: 1,
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password2"
                id="password2"
                type="password"
                placeholder="Password again"
                InputProps={{
                    startAdornment: (
                      <IconButton>
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
                Sign up
              </Button>
              <div style={{ margin: 5 }}>
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
      <Footer />
    </div>
  );
}

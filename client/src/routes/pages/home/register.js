import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

import Header from "../../components/home/header";
import Footer from "../../components/home/footer";

export default function Register() {
  return (
    <div>
      <Header />
      <div style={{ padding: 3 }}>
        <Container
          maxWidth="sm"
          sx={{
            p: 5,
            display: {
              textAlign: "center",
              marginTop: 50,
              backgroundColor: "#dce1e3",
              borderRadius: 10,
              border: "1px solid black",
            },
          }}
        >
          <Box>
            <h1>Sign Up</h1>
            <form>
              <TextField
                variant="filled"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email address"
                name="email"
                autoComplete="email"
                type="email"
                autoFocus
                sx={{
                  backgroundColor: "white",
                  border: "1px solid black",
                  borderRadius: 1,
                }}
              />
              <p
                style={{ margin: 0, textAlign: "center" }}
                id="emailAnswer"
              ></p>
              <TextField
                variant="filled"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                id="password"
                type="password"
                sx={{
                  backgroundColor: "white",
                  border: "1px solid black",
                  borderRadius: 1,
                }}
              />
              <TextField
                variant="filled"
                margin="normal"
                required
                fullWidth
                name="password2"
                label="Password again"
                id="password2"
                type="password"
                sx={{
                  backgroundColor: "white",
                  border: "1px solid black",
                  borderRadius: 1,
                }}
              />
              <p
                style={{ margin: 0, textAlign: "center" }}
                id="passwordAnswer"
              ></p>
              <Button type="submit" fullWidth variant="contained" color="info">
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

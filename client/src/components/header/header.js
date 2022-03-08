import * as React from "react";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import "./header.css";

const logoName = "FullStackReactApp";
const pages = [
  <Link href="/" underline="none" color="inherit">
    Home
  </Link>,
  <Link href="#" underline="none" color="inherit">
    About
  </Link>,
  <Link
    href="/login"
    underline="none"
    color="inherit"
    sx={{ display: { md: "none", lg: "none", xl: "none" } }}
  >
    Sign in
  </Link>,
  <Link
    href="/register"
    underline="none"
    color="inherit"
    sx={{ display: { md: "none", lg: "none", xl: "none" } }}
  >
    Sign up
  </Link>,
];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <header className="header">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Link href="/" color="inherit" underline="none">
              {logoName}
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <Link href="/" color="inherit" underline="none">
              {logoName}
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Button
            variant="outlined"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            href="/login"
            color="warning"
          >
            Log in
          </Button>
          <Button
            variant="outlined"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            href="/register"
            color="warning"
          >
            Sign up
          </Button>
        </Toolbar>
      </Container>
    </header>
  );
}

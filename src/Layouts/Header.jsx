import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";

import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar
      position="static"
      elevation={0}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: {
            xs: 2,
            md: 8,
          },
        }}
      >
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            color: "inherit",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          KIAN
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          <Button
            color="inherit"
            component={Link}
            to="/"
          >
            Home
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/profile"
          >
            About
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/projects"
          >
            Projects
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/contact"
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
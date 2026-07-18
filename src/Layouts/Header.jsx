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
          fontWeight="bold"
        >
          GitHub Finder
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
            Profile
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/post"
          >
            Post
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
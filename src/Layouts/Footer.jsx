import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        backgroundColor: "#111827",
        color: "white",
        py: 5,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "2fr 1fr 1fr",
            },
            gap: 4,
          }}
        >
          {/* About */}
          <Box>
            <Typography
              variant="h6"
              fontWeight="bold"
              mb={2}
            >
              GitHub Profile Finder
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "#9ca3af",
                maxWidth: 350,
                lineHeight: 1.8,
              }}
            >
              A modern React application for searching
              GitHub users and exploring their public
              repositories.
            </Typography>
          </Box>

          {/* Navigation */}
          <Box>
            <Typography
              variant="h6"
              fontWeight="bold"
              mb={2}
            >
              Navigation
            </Typography>

            <Stack spacing={1}>
              <Typography
                component={Link}
                to="/"
                sx={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                Home
              </Typography>

              <Typography
                component={Link}
                to="/profile"
                sx={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                Profile
              </Typography>

              <Typography
                component={Link}
                to="/contact"
                sx={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                Contact
              </Typography>
            </Stack>
          </Box>

          {/* Social */}
          <Box>
            <Typography
              variant="h6"
              fontWeight="bold"
              mb={2}
            >
              Follow Me
            </Typography>

            <IconButton
              href="https://github.com/kianmmoeini"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "white",
                "&:hover": {
                  backgroundColor: "#374151",
                },
              }}
            >
              <GitHubIcon />
            </IconButton>
          </Box>
        </Box>

        <Divider
          sx={{
            my: 4,
            borderColor: "#374151",
          }}
        />

        <Typography
          variant="body2"
          textAlign="center"
          sx={{
            color: "#9ca3af",
          }}
        >
          © {new Date().getFullYear()} Kian Moeini. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
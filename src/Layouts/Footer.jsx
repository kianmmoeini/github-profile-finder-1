import {
  Box,
  Container,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        py: 4,
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container
        maxWidth="lg"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
          >
            © 2026 Kian Moeini
          </Typography>

          <Box>
            <IconButton
              component="a"
              href="https://github.com/kianmmoeini"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </IconButton>

            <IconButton
              component="a"
              href="https://www.linkedin.com/in/kian-moeini-54797a421/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>

        <Divider
          sx={{
            my: 2,
          }}
        />

        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
        >
          Built with React and a passion for learning
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
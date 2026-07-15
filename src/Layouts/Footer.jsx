import {
  Box,
  Typography,
  Link,
} from "@mui/material";
// making the footer component
function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 3,
        textAlign: "center",
        backgroundColor: "#1976d2",
        color: "white",
      }}
    >
      <Typography variant="body2">
        Created by Kian Moeini
      </Typography>

      <Link
        href="https://github.com/kianmmoeini"
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
        underline="hover"
      >
        Visit My GitHub
      </Link>
    </Box>
  );
}

export default Footer;
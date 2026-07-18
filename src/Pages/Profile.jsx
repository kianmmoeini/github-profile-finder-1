import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Stack,
  Paper,
  Avatar,
} from "@mui/material";

import { Link } from "react-router-dom";

import profileImage from "../assets/profile.jpg";

function Profile() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 6,
        }}
      >
        <Paper
          elevation={4}
          sx={{
            width: "100%",
            p: {
              xs: 3,
              md: 6,
            },
            borderRadius: 4,
            textAlign: "center",
          }}
        >
          <Avatar
            src={profileImage}
            alt="Kian Moeini"
            sx={{
              width: 150,
              height: 150,
              mx: "auto",
              mb: 3,
            }}n
          />

          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
          >
            Kian Moeini
          </Typography>

          <Typography
            variant="h6"
            color="primary"
            mb={3}
          >
            Frontend Developer
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            lineHeight={1.8}
            mb={4}
          >
            I'm a frontend developer passionate about building
            modern and user-friendly web applications. I enjoy
            working with React, JavaScript, and modern frontend
            technologies.
          </Typography>

          <Typography
            variant="h5"
            fontWeight="bold"
            mb={2}
          >
            My Skills
          </Typography>

          {/* Skills */}
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            useFlexGap
            sx={{
              mb: 4,
              width: "100%",
            }}
          >
            <Chip label="React" color="primary" />
            <Chip label="JavaScript" color="primary" />
            <Chip label="MUI" color="primary" />
            <Chip label="React Query" color="primary" />
            <Chip label="Axios" color="primary" />
            <Chip label="Git" color="primary" />
            <Chip label="GitHub" color="primary" />
          </Stack>

          {/* Buttons */}
          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              component={Link}
              to="/"
            >
              View Project
            </Button>

            <Button
              variant="outlined"
              href="https://github.com/kianmmoeini"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Container>
  );
}

export default Profile;
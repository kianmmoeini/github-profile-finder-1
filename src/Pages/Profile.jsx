import {
  Box,
  Chip,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

function Profile() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          mt: 6,
          mb: 8,
        }}
      >
        <Typography
          variant="overline"
          color="secondary"
          fontWeight="bold"
        >
          About Me
        </Typography>

        <Typography
          variant="h2"
          fontWeight="bold"
          mt={1}
          mb={3}
          sx={{
            fontSize: {
              xs: "2.5rem",
              md: "4rem",
            },
          }}
        >
          A little about me.
        </Typography>
        <Typography
          variant="h4"    
          mt={1}
          mb={3}
        >
          Frontend Developer & AI / Data Enthusiast
        </Typography>

        <Box
          sx={{
            maxWidth: 800,
          }}
        >
          <Typography
            color="text.secondary"
            lineHeight={2}
            mb={2}
          >
            I'm Kian Moeini, a developer with a strong interest in frontend development, artificial intelligence and data.

            I work with React to build modern and user-friendly web applications. Alongside frontend development, I have experience working with data science and data analysis projects, and I have explored machine learning, AI algorithms and the theory behind artificial intelligence.

            I also work with Python and Flask, and I have experience designing a model with Lua. I enjoy learning new technologies and turning ideas into practical projects.
          </Typography>

          <Typography
            color="text.secondary"
            lineHeight={2}
          >
            I enjoy learning new technologies and
            improving my skills by building real-world
            projects. My main focus is creating clean,
            functional and user-friendly interfaces.
          </Typography>
        </Box>

        <Divider sx={{ my: 6 }} />

        <Typography
          variant="h4"
          fontWeight="bold"
          mb={3}
        >
          My Skills
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          flexWrap="wrap"
        >
          <Chip label="React" />
          <Chip label="JavaScript" />
          <Chip label="HTML" />
          <Chip label="CSS" />
          <Chip label="Material UI" />
          <Chip label="Axios" />
          <Chip label="React Query" />
          <Chip label="React Router" />
          <Chip label="Git" />
          <Chip label="GitHub" />
          <Chip label="Python" />
          <Chip label="Data science" />
          <Chip label="Data analysis" />
          <Chip label="Al algoritm" />
          <Chip label="AI theory" />
          <Chip label="Lua" />
          <Chip label="Flast framework" />
        </Stack>

        <Divider sx={{ my: 6 }} />

        <Typography
          variant="h4"
          fontWeight="bold"
          mb={3}
        >
          What I Do
        </Typography>

        <Typography
          color="text.secondary"
          lineHeight={2}
          maxWidth={800}
        >
          I build frontend applications with React,
          work with APIs, manage server state using
          React Query, and create responsive interfaces
          with Material UI.
        </Typography>
      </Box>
    </Container>
  );
}

export default Profile;
import {
  Box,
  Chip,
  Container,
  Divider,
  Typography,
} from "@mui/material";

const frontendSkills = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Material UI",
  "Axios",
  "React Query",
  "React Router",
];

const aiSkills = [
  "Python",
  "Data Science",
  "Data Analysis",
  "Machine Learning",
  "AI Algorithms",
  "AI Theory",
  "Flask",
  "Lua",
];

const tools = [
  "Git",
  "GitHub",
];

function Profile() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          mt: {
            xs: 4,
            md: 7,
          },
          mb: {
            xs: 6,
            md: 8,
          },
        }}
      >
        <Typography
          variant="overline"
          color="secondary"
          fontWeight="bold"
          letterSpacing={2}
        >
          ABOUT ME
        </Typography>

        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{
            mt: 1,
            mb: 2,
            fontSize: {
              xs: "2.3rem",
              sm: "3rem",
              md: "4rem",
            },
          }}
        >
          A little about me.
        </Typography>

        <Typography
          sx={{
            color: "primary.main",
            fontWeight: 600,
            fontSize: {
              xs: "1.25rem",
              md: "1.8rem",
            },
            mb: 3,
          }}
        >
          Frontend Developer • AI & Data Enthusiast
        </Typography>

        <Box
          sx={{
            maxWidth: 850,
            width: "100%",
          }}
        >
          <Typography
            color="text.secondary"
            sx={{
              lineHeight: 1.9,
              mb: 3,
            }}
          >
            I'm Kian Moeini, a developer with a strong
            interest in frontend development, artificial
            intelligence and data.

            I build modern and responsive web applications
            using React while focusing on clean design,
            performance and user experience.
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              lineHeight: 1.9,
            }}
          >
            Alongside frontend development, I have worked on
            data science and data analysis projects, explored
            machine learning, AI algorithms and the theory of
            artificial intelligence. I also develop Python
            applications with Flask and have experience
            designing models using Lua. I enjoy learning new
            technologies and turning ideas into practical
            software solutions.
          </Typography>
        </Box>

        <Divider sx={{ my: 6 }} />

        <Typography
          variant="h4"
          fontWeight="bold"
          mb={3}
        >
          Frontend
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1.5,
          }}
        >
          {frontendSkills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              sx={{
                height: 38,
              }}
            />
          ))}
        </Box>

        <Divider sx={{ my: 5 }} />

        <Typography
          variant="h4"
          fontWeight="bold"
          mb={3}
        >
          AI & Data
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1.5,
          }}
        >
          {aiSkills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              sx={{
                height: 38,
              }}
            />
          ))}
        </Box>

        <Divider sx={{ my: 5 }} />

        <Typography
          variant="h4"
          fontWeight="bold"
          mb={3}
        >
          Tools
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1.5,
          }}
        >
          {tools.map((tool) => (
            <Chip
              key={tool}
              label={tool}
              sx={{
                height: 38,
              }}
            />
          ))}
        </Box>

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
          sx={{
            maxWidth: 850,
            lineHeight: 1.9,
          }}
        >
          I develop modern frontend applications using
          React, build responsive interfaces with Material
          UI, integrate REST APIs and manage server state
          with React Query.

          Beyond frontend development, I enjoy working on
          data science and machine learning projects,
          exploring artificial intelligence concepts, and
          building backend services with Flask. My goal is
          to continuously improve my skills by creating
          practical and real-world software projects.
        </Typography>
      </Box>
    </Container>
  );
}

export default Profile;
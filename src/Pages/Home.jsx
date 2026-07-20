import {
Box,
Button,
Container,
Stack,
Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

function Home() {
return ( <Container maxWidth="lg">
<Box
sx={{
minHeight: "75vh",
display: "flex",
alignItems: "center",
justifyContent: "space-between",
gap: 6,
py: 8,
flexDirection: {
xs: "column-reverse",
md: "row",
},
}}
>
<Box
sx={{
maxWidth: 650,
}}
> <Typography
         variant="overline"
         color="secondary"
         fontWeight="bold"
       >
Frontend Developer </Typography>

      <Typography
        variant="h1"
        sx={{
          fontSize: {
            xs: "3rem",
            md: "5rem",
          },
        }}
      >
        Hi, I'm Kian.
      </Typography>

      <Typography
        variant="h4"
        color="primary"
        mt={1}
      >
        I build things for the web.
      </Typography>

      <Typography
        color="text.secondary"
        lineHeight={1.8}
        mt={3}
      >
        I'm a frontend developer focused on building
        modern, responsive and user-friendly web
        applications using React.
      </Typography>

      <Stack
        direction={{
          xs: "column",
          sm: "row",
        }}
        spacing={2}
        mt={4}
      >
        <Button
          variant="contained"
          component={Link}
          to="/projects"
        >
          View My Projects
        </Button>

        <Button
          variant="outlined"
          component={Link}
          to="/contact"
        >
          Contact Me
        </Button>

        <Button
          variant="text"
          component={Link}
          to="/profile"
        >
          About Me
        </Button>
      </Stack>
    </Box>

    <Box
      sx={{
        width: {
          xs: 220,
          sm: 280,
          md: 360,
        },
        height: {
          xs: 220,
          sm: 280,
          md: 360,
        },
        borderRadius: "50%",
        overflow: "hidden",
        border: "4px solid",
        borderColor: "primary.main",
        boxShadow:
          "0 0 40px rgba(124, 58, 237, 0.35)",
        flexShrink: 0,
      }}
    >
      <Box
        component="img"
        src="/profile.jpg"
        alt="Kian Moeini"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  </Box>
</Container>


);
}

export default Home;
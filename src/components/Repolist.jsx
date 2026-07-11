import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Alert,
} from "@mui/material";

function RepoList({ repos }) {
  if (repos.length === 0) {
    return (
      <Alert severity="info" sx={{ mt: 3 }}>
        This user has no public repositories.
      </Alert>
    );
  }
  else {
    return (
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Repositories
        </Typography>
        {repos.map((repo) => (
          <Card
            key={repo.id}
            sx={{
              mb: 2,
              p: 1,
              borderRadius: 3,
              boxShadow: 3,
              transition: "0.3s",
              "&:hover": {
                boxShadow: 8,
                transform: "translateY(-3px)",
              },
            }}

          >
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                {repo.name}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 1 }}
              >
                {repo.description || "No description available"}
              </Typography>

              <Button
                variant="contained"
                href={repo.html_url}
                target="_blank"
                sx={{ mt: 2 }}
              >
                View Repository
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    );
  }
}

export default RepoList;
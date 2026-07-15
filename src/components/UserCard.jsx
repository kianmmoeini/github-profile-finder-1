import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Button,
  Box,
  Divider,
} from "@mui/material";

function UserCard({ user }) {
  return (
    <Card
      sx={{
        maxWidth: 600,
        mx: "auto",
        mt: 4,
        borderRadius: 4,
        boxShadow: 4,
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Avatar
            src={user.avatar_url}
            alt={user.login}
            sx={{
              width: 120,
              height: 120,
            }}
          />

          <Box>
            <Typography
              variant="h5"
              fontWeight="bold"
            >
              {user.name || "No Name"}
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ mt: 0.5 }}
            >
              @{user.login}
            </Typography>

            <Typography
              sx={{ mt: 2 }}
            >
              {user.bio || "This user has no bio."}
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              📍 {user.location || "Unknown location"}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            textAlign: "center",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              fontWeight="bold"
            >
              {user.public_repos}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              Repositories
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h6"
              fontWeight="bold"
            >
              {user.followers}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              Followers
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h6"
              fontWeight="bold"
            >
              {user.following}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              Following
            </Typography>
          </Box>
        </Box>

        <Button
          fullWidth
          variant="contained"
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          sx={{ mt: 3 }}
        >
          View GitHub Profile
        </Button>
      </CardContent>
    </Card>
  );
}

export default UserCard;
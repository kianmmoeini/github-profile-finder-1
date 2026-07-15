import { useState } from "react";

import {
  TextField,
  Button,
  Box,
} from "@mui/material";

function SearchBar({ onSearch, loading }) {
  const [username, setUsername] = useState("");

  const handleSearch = () => {
    const value = username.trim();

    if (!value) return;

    onSearch(value);
  };

  const handleKeyDown = (event) => {
    if (
      event.key === "Enter" &&
      !loading
    ) {
      handleSearch();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        maxWidth: 600,
        mx: "auto",
        mt: 4,
      }}
    >
      <TextField
        fullWidth
        label="GitHub Username"
        placeholder="Enter username..."
        value={username}
        onChange={(event) =>
          setUsername(event.target.value)
        }
        onKeyDown={handleKeyDown}
        disabled={loading}
      />

      <Button
        variant="contained"
        onClick={handleSearch}
        disabled={loading}
        sx={{
          px: 4,
          whiteSpace: "nowrap",
        }}
      >
        {loading ? "Loading..." : "Search"}
      </Button>
    </Box>
  );
}

export default SearchBar;
import { useState } from "react";
// this is a comment from ali aslani 
function SearchBar({ onSearch, loading }) {
  const [username, setUsername] = useState("");

  const handleSearch = () => {
    onSearch(username.trim());
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !loading) {
      handleSearch();
    }
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button
        onClick={handleSearch}
        disabled={loading}
      >
        {loading ? "Loading..." : "Search"}
      </button>
    </div>
  );
}

export default SearchBar;
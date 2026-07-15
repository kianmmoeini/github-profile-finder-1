import CircularProgress from "@mui/material/CircularProgress";
function Loading() {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Loading...</h2>
      <CircularProgress />
    </div>
  );
}

export default Loading;
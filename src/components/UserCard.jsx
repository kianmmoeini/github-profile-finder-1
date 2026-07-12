function UserCard({ user }) {
  return (
    <div className="user-card">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="avatar"
      />

      <h2>{user.name || "No Name"}</h2>

      <p className="username">@{user.login}</p>

      <p className="bio">
        {user.bio || "This user has no bio."}
      </p>

      <p>📍 {user.location || "Unknown location"}</p>

      <div className="stats">
        <div>
          <h3>{user.public_repos}</h3>
          <span>Repositories</span>
        </div>

        <div>
          <h3>{user.followers}</h3>
          <span>Followers</span>
        </div>

        <div>
          <h3>{user.following}</h3>
          <span>Following</span>
        </div>
      </div>

      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
      >
        View GitHub Profile
      </a>
    </div>
  );
}

export default UserCard;
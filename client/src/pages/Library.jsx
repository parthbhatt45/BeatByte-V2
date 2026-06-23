import SongCard from "../components/SongCard";
import { useLikedSongs } from "../contexts/LikedSongsContext";
import { usePlayer } from "../contexts/PlayerContext";

function Library() {
    const { likedSongs } = useLikedSongs();
    const { recentlyPlayed } = usePlayer();

    return (
        <>
            <div className="library-header">
                <h1 className="page-heading">
                    Your Library
                </h1>

                <p className="library-subtitle">
                    Manage your liked songs and recently played music.
                </p>
            </div>

            <section className="library-stats two-columns">
                <div className="library-stat-card">
                    <span className="library-stat-label">
                        Liked Songs
                    </span>

                    <strong className="library-stat-value">
                        {likedSongs.length}
                    </strong>
                </div>

                <div className="library-stat-card">
                    <span className="library-stat-label">
                        Recently Played
                    </span>

                    <strong className="library-stat-value">
                        {recentlyPlayed.length}
                    </strong>
                </div>
            </section>

            <section className="section">
                <div className="section-title-row">
                    <h2 className="section-heading">
                        Liked Songs
                    </h2>

                    <span className="section-count">
                        {likedSongs.length} songs
                    </span>
                </div>

                {likedSongs.length > 0 ? (
                    <div className="card-grid">
                        {likedSongs.map((song) => (
                            <SongCard
                                key={song._id}
                                song={song}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="empty-library">
                        Songs you like will appear here.
                    </div>
                )}
            </section>

            <section className="section">
                <div className="section-title-row">
                    <h2 className="section-heading">
                        Recently Played
                    </h2>

                    <span className="section-count">
                        {recentlyPlayed.length} songs
                    </span>
                </div>

                {recentlyPlayed.length > 0 ? (
                    <div className="card-grid">
                        {recentlyPlayed.map((song) => (
                            <SongCard
                                key={song._id}
                                song={song}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="empty-library">
                        Start playing songs to build your history.
                    </div>
                )}
            </section>
        </>
    );
}

export default Library;
import {
    FaHeart,
    FaPause,
    FaPlay,
    FaRegHeart,
} from "react-icons/fa";

import { useLikedSongs } from "../contexts/LikedSongsContext";
import { usePlayer } from "../contexts/PlayerContext";

function SongCard({ song }) {
    const {
        playSong,
        currentSong,
        isPlaying,
    } = usePlayer();

    const {
        toggleLike,
        isLiked,
    } = useLikedSongs();

    const isActive =
        currentSong?._id === song._id;

    const liked =
        isLiked(song._id);

    return (
        <div
            className={`song-card ${isActive ? "active" : ""}`}
            onClick={() => playSong(song)}
        >
            <button
                className={`song-like-btn ${liked ? "liked" : ""}`}
                onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(song);
                }}
                type="button"
                aria-label={liked ? "Unlike song" : "Like song"}
            >
                {liked ? <FaHeart /> : <FaRegHeart />}
            </button>

            <div className="song-card-media">
                <img
                    src={song.coverImage}
                    alt={song.title}
                    className="song-card-image"
                />

                <div className="song-card-overlay">
                    <div className="song-card-play-icon">
                        {isActive && isPlaying ? (
                            <FaPause />
                        ) : (
                            <FaPlay />
                        )}
                    </div>
                </div>
            </div>

            <div className="song-card-content">
                <div className="song-card-title">
                    {song.title}
                </div>

                <div className="song-card-artist">
                    {song.artist}
                </div>
            </div>
        </div>
    );
}

export default SongCard;
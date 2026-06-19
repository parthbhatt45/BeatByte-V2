function SongCard({ song }) {
    return (
        <div className="song-card">
            <img src={song.image} alt={song.title} className="song-card-image" />
            <div className="song-card-content">
                <div className="song-card-title">{song.title}</div>
                <div className="song-card-artist">{song.artist}</div>
            </div>
        </div>
    );
}

export default SongCard;

function ArtistCard({ artist }) {
    return (
        <div className="artist-card">
            <img src={artist.image} alt={artist.name} className="artist-image" />
            <div className="artist-name">{artist.name}</div>
            <div className="artist-label">Artist</div>
        </div>
    );
}

export default ArtistCard;

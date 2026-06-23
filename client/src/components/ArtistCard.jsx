import { useNavigate } from "react-router-dom";

function ArtistCard({ artist }) {
    const navigate = useNavigate();

    return (
        <div
            className="artist-card"
            onClick={() =>
                navigate(
                    `/artist/${artist.name}`
                )
            }
        >
            <img
                src={artist.image}
                alt={artist.name}
                className="artist-image"
            />

            <div className="artist-name">
                {artist.name}
            </div>

            <div className="artist-label">
                Artist
            </div>
        </div>
    );
}

export default ArtistCard;
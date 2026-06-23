import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

import SongCard from "../components/SongCard";
import { getSongs } from "../services/songService";

function ArtistPage() {
    const { artistName } = useParams();
    const navigate = useNavigate();

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getSongs()
            .then((data) => {
                const filteredSongs = data.filter(
                    (song) =>
                        song.artist
                            .toLowerCase()
                            .includes(
                                artistName.toLowerCase()
                            )
                );

                setSongs(filteredSongs);
            })
            .catch(console.error);
    }, [artistName]);

    return (
        <>
            <button
                onClick={() => navigate("/")}
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "var(--card)",
                    border: "none",
                    color: "var(--text)",
                    padding: "10px 16px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    marginBottom: "24px",
                    fontSize: "14px",
                    fontWeight: "600",
                }}
            >
                <FaArrowLeft />
                Back to Home
            </button>

            <h1 className="page-heading">
                {artistName}
            </h1>

            <p
                style={{
                    color: "var(--text-secondary)",
                    marginBottom: "24px",
                }}
            >
                {songs.length} Songs Available
            </p>

            <div className="card-grid">
                {songs.map((song) => (
                    <SongCard
                        key={song._id}
                        song={song}
                    />
                ))}
            </div>
        </>
    );
}

export default ArtistPage;
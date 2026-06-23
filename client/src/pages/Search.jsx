import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import SongCard from "../components/SongCard";
import { getSongs } from "../services/songService";

function Search() {
    const [songs, setSongs] = useState([]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getSongs()
            .then(setSongs)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    const filtered = songs.filter(
        (s) =>
            s.title.toLowerCase().includes(query.toLowerCase()) ||
            s.artist.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <>
            <div style={{ marginBottom: "32px" }}>
                <h1 className="page-heading">Search</h1>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        background: "var(--surface, #1a1a2e)",
                        border: "1px solid var(--border, #333)",
                        borderRadius: "8px",
                        padding: "10px 16px",
                        marginTop: "16px",
                    }}
                >
                    <FaSearch style={{ color: "var(--text-secondary, #aaa)", flexShrink: 0 }} />
                    <input
                        type="text"
                        placeholder="Search songs or artists..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        style={{
                            background: "transparent",
                            border: "none",
                            outline: "none",
                            color: "var(--text-primary, #fff)",
                            fontSize: "16px",
                            width: "100%",
                        }}
                        autoFocus
                    />
                    {query && (
                        <button
                            onClick={() => setQuery("")}
                            style={{
                                background: "none",
                                border: "none",
                                color: "var(--text-secondary, #aaa)",
                                cursor: "pointer",
                                fontSize: "18px",
                                lineHeight: 1,
                            }}
                        >
                            ×
                        </button>
                    )}
                </div>
            </div>

            {loading ? (
                <p style={{ color: "var(--text-secondary, #aaa)" }}>Loading songs...</p>
            ) : query === "" ? (
                <p style={{ color: "var(--text-secondary, #aaa)" }}>Start typing to search songs and artists.</p>
            ) : filtered.length === 0 ? (
                <p style={{ color: "var(--text-secondary, #aaa)" }}>No results for "{query}"</p>
            ) : (
                <section className="section">
                    <h2 className="section-heading">
                        {filtered.length} result{filtered.length !== 1 ? "s" : ""}
                    </h2>
                    <div className="card-grid">
                        {filtered.map((song) => (
                            <SongCard key={song._id} song={song} />
                        ))}
                    </div>
                </section>
            )}
        </>
    );
}

export default Search;
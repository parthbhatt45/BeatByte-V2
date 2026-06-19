import { useEffect, useState } from "react";
import SongCard from "../components/SongCard";
import ArtistCard from "../components/ArtistCard";
import { getSongs } from "../services/songService";

function Home() {
    const [songs, setSongs] = useState([]);
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const data = await getSongs();
                setSongs(data);
            } catch (error) {
                console.error("Error fetching songs:", error);
            }
        };
        fetchSongs();
    }, []);

    const artists = [
        { id: 1, name: "The Weeknd", image: "https://picsum.photos/200?11" },
        { id: 2, name: "Dua Lipa", image: "https://picsum.photos/200?12" },
        { id: 3, name: "Imagine Dragons", image: "https://picsum.photos/200?13" },
        { id: 4, name: "Arijit Singh", image: "https://picsum.photos/200?14" },
    ];

    return (
        <>
            <div style={{ marginBottom: '40px' }}>
                <p style={{ color: 'var(--accent)', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Good Evening 👋</p>
                <h1 className="page-heading">Welcome back, {user?.name || 'Guest'}</h1>
            </div>

            <section className="section">
                <h2 className="section-heading">Trending Songs</h2>
                <div className="card-grid">
                    {songs.map((song) => (
                        <SongCard
                            key={song._id}
                            song={{
                                title: song.title,
                                artist: song.artist,
                                image: song.coverImage,
                            }}
                        />
                    ))}
                </div>
            </section>

            <section className="section">
                <h2 className="section-heading">Featured Artists</h2>
                <div className="card-grid">
                    {artists.map((artist) => (
                        <ArtistCard key={artist.id} artist={artist} />
                    ))}
                </div>
            </section>
        </>
    );
}

export default Home;

import { useEffect, useState } from "react";

import ArtistCard from "../components/ArtistCard";
import SongCard from "../components/SongCard";
import { usePlayer } from "../contexts/PlayerContext";
import { getSongs } from "../services/songService";

function Home() {
    const [songs, setSongs] = useState([]);
    const user = JSON.parse(localStorage.getItem("user"));

    const { setSongs: setPlayerSongs } = usePlayer();

    useEffect(() => {
        getSongs()
            .then((data) => {
                setSongs(data);
                setPlayerSongs(data);
            })
            .catch(console.error);
    }, [setPlayerSongs]);

    const artists = [
        {
            id: 1,
            name: "Arijit Singh",
            image:
                "https://upload.wikimedia.org/wikipedia/commons/b/b7/Arijit_Singh_performance_at_Chandigarh_2025.jpg",
        },
        {
            id: 2,
            name: "Alka Yagnik",
            image:
                "https://i.pinimg.com/736x/bd/fd/cb/bdfdcba541ae242a0271c296997e8e32.jpg",
        },
        {
            id: 3,
            name: "Sonu Nigam",
            image:
                "https://cdn.prod.website-files.com/67483aed5ca778dff5caac88/68245d0dbad2e77740eb5c48_Placeholdersonuji%20Image%402x.png",
        },
        {
            id: 4,
            name: "Abhijeet",
            image:
                "https://a10.gaanacdn.com/gn_img/artists/10q3Z1K52r/0q3Zj7En35/size_m_1739429235.jpg",
        },
    ];

    return (
        <>
            <section className="home-welcome">
                <p className="home-eyebrow">
                    BeatByte Music
                </p>

                <h1 className="page-heading">
                    Welcome back{user?.name ? `, ${user.name}` : ""}
                </h1>

                <p className="home-subtitle">
                    Discover trending tracks, revisit your favorites, and keep the music flowing.
                </p>
            </section>

            <section className="section">
                <h2 className="section-heading">
                    Trending Songs
                </h2>

                <div className="card-grid">
                    {songs.map((song) => (
                        <SongCard
                            key={song._id}
                            song={song}
                        />
                    ))}
                </div>
            </section>

            <section className="section">
                <h2 className="section-heading">
                    Featured Artists
                </h2>

                <div className="card-grid">
                    {artists.map((artist) => (
                        <ArtistCard
                            key={artist.id}
                            artist={artist}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}

export default Home;
import SongCard from "../components/SongCard";
import ArtistCard from "../components/ArtistCard";

function Home() {
    const songs = [
        {
            id: 1,
            title: "Blinding Lights",
            artist: "The Weeknd",
            image: "https://picsum.photos/300?1",
        },
        {
            id: 2,
            title: "Starboy",
            artist: "The Weeknd",
            image: "https://picsum.photos/300?2",
        },
        {
            id: 3,
            title: "Believer",
            artist: "Imagine Dragons",
            image: "https://picsum.photos/300?3",
        },
        {
            id: 4,
            title: "Levitating",
            artist: "Dua Lipa",
            image: "https://picsum.photos/300?4",
        },
    ];

    const artists = [
        {
            id: 1,
            name: "The Weeknd",
            image: "https://picsum.photos/200?11",
        },
        {
            id: 2,
            name: "Dua Lipa",
            image: "https://picsum.photos/200?12",
        },
        {
            id: 3,
            name: "Imagine Dragons",
            image: "https://picsum.photos/200?13",
        },
        {
            id: 4,
            name: "Arijit Singh",
            image: "https://picsum.photos/200?14",
        },
    ];

    return (
        <div>
            <h1 className="text-4xl font-bold mb-8">
                Good Evening 👋
            </h1>

            <h2 className="text-2xl font-semibold mb-5">
                Trending Songs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {songs.map((song) => (
                    <SongCard
                        key={song.id}
                        song={song}
                    />
                ))}
            </div>

            <h2 className="text-2xl font-semibold mt-12 mb-5">
                Featured Artists
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {artists.map((artist) => (
                    <ArtistCard
                        key={artist.id}
                        artist={artist}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;
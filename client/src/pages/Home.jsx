import SongCard from "../components/SongCard";

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

    return (
        <div>
            <h1 className="text-4xl font-bold mb-8">
                Good Evening
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
        </div>
    );
}

export default Home;
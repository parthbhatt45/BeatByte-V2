import { FaPlay } from "react-icons/fa";

function SongCard({ song }) {
    return (
        <div className="bg-[#181818] p-4 rounded-xl hover:bg-[#282828] transition-all duration-300 cursor-pointer">

            <img
                src={song.image}
                alt={song.title}
                className="w-full h-40 object-cover rounded-lg"
            />

            <div className="flex justify-between items-center mt-3">
                <div>
                    <h3 className="font-semibold">{song.title}</h3>
                    <p className="text-gray-400 text-sm">
                        {song.artist}
                    </p>
                </div>

                <button className="bg-green-500 p-3 rounded-full hover:scale-110 transition">
                    <FaPlay />
                </button>
            </div>
        </div>
    );
}

export default SongCard;
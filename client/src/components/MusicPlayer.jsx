import {
    FaPlay,
    FaStepBackward,
    FaStepForward,
} from "react-icons/fa";

function MusicPlayer() {
    return (
        <div className="fixed bottom-0 left-0 right-0 h-20 bg-[#121212] border-t border-[#2a2a2a] flex items-center justify-between px-6 z-50">

            {/* Song Info */}
            <div>
                <h3 className="font-semibold">
                    Blinding Lights
                </h3>

                <p className="text-sm text-gray-400">
                    The Weeknd
                </p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-6">

                <button className="hover:text-green-500 transition">
                    <FaStepBackward />
                </button>

                <button className="bg-white text-black p-3 rounded-full hover:scale-110 transition">
                    <FaPlay />
                </button>

                <button className="hover:text-green-500 transition">
                    <FaStepForward />
                </button>

            </div>

            {/* Progress Bar */}
            <div className="w-40">
                <input
                    type="range"
                    min="0"
                    max="100"
                    className="w-full"
                />
            </div>

        </div>
    );
}

export default MusicPlayer;
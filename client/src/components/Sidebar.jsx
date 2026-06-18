import { Link } from "react-router-dom";
import {
    FaHome,
    FaSearch,
    FaMusic,
    FaUser,
} from "react-icons/fa";

function Sidebar() {
    return (
        <div className="w-64 h-screen bg-[#121212] p-5 border-r border-[#2a2a2a]">

            <div className="mb-10">
                <h1 className="text-3xl font-bold text-green-500">
                    BeatByte
                </h1>

                <p className="text-xs text-gray-400 mt-1">
                    Feel The Beat. Own The Byte.
                </p>
            </div>

            <nav className="flex flex-col gap-5">

                <Link
                    to="/"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#282828] transition-all duration-300"
                >
                    <FaHome />
                    Home
                </Link>

                <Link
                    to="/"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#282828] transition-all duration-300"
                >
                    <FaSearch />
                    Search
                </Link>

                <Link
                    to="/"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#282828] transition-all duration-300"
                >
                    <FaMusic />
                    Library
                </Link>

                <Link
                    to="/"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#282828] transition-all duration-300"
                >
                    <FaUser />
                    Profile
                </Link>

            </nav>
        </div>
    );
}

export default Sidebar;
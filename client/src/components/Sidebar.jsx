import { Link, useNavigate } from "react-router-dom";
import {
    FaHome,
    FaSearch,
    FaMusic,
    FaUser,
} from "react-icons/fa";

function Sidebar() {
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/login");
    };

    return (
        <div className="w-64 min-h-screen bg-[#121212] border-r border-[#2a2a2a] flex flex-col p-5">

            {/* Logo */}
            <div className="mb-10">
                <h1 className="text-3xl font-bold text-green-500">
                    BeatByte
                </h1>

                <p className="text-xs text-gray-400 mt-1">
                    Feel The Beat. Own The Byte.
                </p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-3">

                <Link
                    to="/"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#282828] transition-all duration-300"
                >
                    <FaHome />
                    Home
                </Link>

                <Link
                    to="/search"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#282828] transition-all duration-300"
                >
                    <FaSearch />
                    Search
                </Link>

                <Link
                    to="/library"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#282828] transition-all duration-300"
                >
                    <FaMusic />
                    Library
                </Link>

                <Link
                    to="/profile"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#282828] transition-all duration-300"
                >
                    <FaUser />
                    Profile
                </Link>

            </nav>

            {/* User Section */}
            <div className="mt-auto border-t border-[#2a2a2a] pt-4">

                <p className="text-sm text-gray-400">
                    Welcome 👋
                </p>

                <h3 className="font-semibold mt-1">
                    {user?.name || "User"}
                </h3>

                <button
                    onClick={handleLogout}
                    className="mt-4 w-full bg-red-500 hover:bg-red-600 transition p-2 rounded-lg font-medium"
                >
                    Logout
                </button>

            </div>

        </div>
    );
}

export default Sidebar;
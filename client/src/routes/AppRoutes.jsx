import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Search from "../pages/Search";
import Library from "../pages/Library";
import Profile from "../pages/Profile";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/library" element={<Library />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
}

export default AppRoutes;
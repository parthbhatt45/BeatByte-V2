import { useLocation } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import MusicPlayer from "../components/MusicPlayer";

function MainLayout({ children }) {
    const location = useLocation();

    const hidePlayer =
        location.pathname === "/login" ||
        location.pathname === "/register";

    return (
        <>
            <Sidebar />

            <main className="main-content">
                {children}
            </main>

            {!hidePlayer && <MusicPlayer />}
        </>
    );
}

export default MainLayout;
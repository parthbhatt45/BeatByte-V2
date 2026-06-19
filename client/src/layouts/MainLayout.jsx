import Sidebar from "../components/Sidebar";
import MusicPlayer from "../components/MusicPlayer";

function MainLayout({ children }) {
    return (
        <>
            <Sidebar />
            <main className="main-content">
                {children}
            </main>
            <MusicPlayer />
        </>
    );
}

export default MainLayout;

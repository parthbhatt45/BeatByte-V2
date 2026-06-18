import Sidebar from "../components/Sidebar";
import MusicPlayer from "../components/MusicPlayer";

function MainLayout({ children }) {
    return (
        <>
            <div className="flex min-h-screen bg-[#0f0f0f] text-white">
                <Sidebar />

                <main className="flex-1 p-8 pb-28 overflow-y-auto">
                    {children}
                </main>
            </div>

            <MusicPlayer />
        </>
    );
}

export default MainLayout;
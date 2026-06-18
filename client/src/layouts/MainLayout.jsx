import Sidebar from "../components/Sidebar";

function MainLayout({ children }) {
    return (
        <div className="flex min-h-screen">

            <Sidebar />

            <main className="flex-1 p-8 bg-[#0f0f0f]">
                {children}
            </main>

        </div>
    );
}

export default MainLayout;
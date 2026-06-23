import { useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaCalendarAlt, FaMusic, FaCheckCircle } from "react-icons/fa";
import { getSongs } from "../services/songService";

function Profile() {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    const [totalSongs, setTotalSongs] = useState(0);

    useEffect(() => {
        getSongs().then((songs) => setTotalSongs(songs.length)).catch(console.error);
    }, []);

    const joinDate = user?.createdAt
        ? new Date(user.createdAt).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })
        : "N/A";

    const avatarLetter = user?.name?.charAt(0)?.toUpperCase() || "U";

    const stats = [
        { icon: <FaMusic />, label: "Total Songs", value: totalSongs },
        { icon: <FaCheckCircle />, label: "Auth Status", value: token ? "Authenticated" : "Guest" },
        { icon: <FaCalendarAlt />, label: "Joined", value: joinDate },
    ];

    return (
        <>
            <div style={{ marginBottom: "32px" }}>
                <h1 className="page-heading">Profile</h1>
            </div>

            {/* Avatar + Name */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "24px",
                    marginBottom: "40px",
                    padding: "28px",
                    background: "var(--surface, #1a1a2e)",
                    borderRadius: "16px",
                    border: "1px solid var(--border, #333)",
                }}
            >
                <div
                    style={{
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        background: "var(--accent, #1db954)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "32px",
                        fontWeight: 700,
                        color: "#000",
                        flexShrink: 0,
                    }}
                >
                    {user?.profilePic ? (
                        <img
                            src={user.profilePic}
                            alt="avatar"
                            style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }}
                        />
                    ) : (
                        avatarLetter
                    )}
                </div>
                <div>
                    <h2 style={{ margin: 0, fontSize: "24px", fontWeight: 600 }}>{user?.name || "User"}</h2>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            color: "var(--text-secondary, #aaa)",
                            marginTop: "6px",
                        }}
                    >
                        <FaEnvelope style={{ fontSize: 13 }} />
                        <span style={{ fontSize: "14px" }}>{user?.email || "—"}</span>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                    gap: "16px",
                }}
            >
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        style={{
                            padding: "20px",
                            background: "var(--surface, #1a1a2e)",
                            borderRadius: "12px",
                            border: "1px solid var(--border, #333)",
                        }}
                    >
                        <div
                            style={{
                                color: "var(--accent, #1db954)",
                                fontSize: "20px",
                                marginBottom: "10px",
                            }}
                        >
                            {stat.icon}
                        </div>
                        <div style={{ fontSize: "13px", color: "var(--text-secondary, #aaa)", marginBottom: "4px" }}>
                            {stat.label}
                        </div>
                        <div style={{ fontSize: "18px", fontWeight: 600 }}>{stat.value}</div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Profile;
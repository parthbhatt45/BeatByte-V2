import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHome, FaSearch, FaMusic, FaUser, FaSignOutAlt } from "react-icons/fa";

function Sidebar() {
    const location = useLocation();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    const navItems = [
        { to: '/', icon: <FaHome />, label: 'Home' },
        { to: '/search', icon: <FaSearch />, label: 'Search' },
        { to: '/library', icon: <FaMusic />, label: 'Library' },
        { to: '/profile', icon: <FaUser />, label: 'Profile' },
    ];

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                <div className="sidebar-logo-icon">♫</div>
                <h1>BeatByte</h1>
            </div>

            <nav className="sidebar-nav">
                {navItems.map(item => (
                    <Link
                        key={item.to}
                        to={item.to}
                        className={`nav-item ${location.pathname === item.to ? 'active' : ''}`}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </Link>
                ))}
            </nav>

            <div className="sidebar-user">
                <div className="user-info">
                    <div className="user-avatar">
                        {user?.avatar ? (
                            <img src={user.avatar} alt="avatar" />
                        ) : (
                            user?.name?.charAt(0)?.toUpperCase() || 'U'
                        )}
                    </div>
                    <div className="user-details">
                        <div className="user-name">{user?.name || 'User'}</div>
                        <div className="user-email">{user?.email || 'user@example.com'}</div>
                    </div>
                </div>
                <button onClick={handleLogout} className="logout-btn">
                    <FaSignOutAlt /> Logout
                </button>
            </div>
        </aside>
    );
}

export default Sidebar;

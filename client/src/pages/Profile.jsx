function Profile() {
    const user = JSON.parse(localStorage.getItem("user"));
    const joinDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <>
            <h1 className="page-heading">Profile</h1>

            <div style={{ display: 'flex', gap: '24px', marginBottom: '40px', alignItems: 'flex-start' }}>
                <img
                    src={user?.avatar || 'https://picsum.photos/seed/profile/100'}
                    alt="avatar"
                    style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                    }}
                />
                <div>
                    <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>Welcome back!</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>{user?.email}</p>
                </div>
            </div>

            <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                <div className="song-card" style={{ cursor: 'default' }}>
                    <div style={{ padding: '24px', textAlign: 'left' }}>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>NAME</div>
                        <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--accent)' }}>{user?.name}</div>
                    </div>
                </div>

                <div className="song-card" style={{ cursor: 'default' }}>
                    <div style={{ padding: '24px', textAlign: 'left' }}>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>EMAIL</div>
                        <div style={{ fontSize: '15px', fontWeight: '600' }}>{user?.email}</div>
                    </div>
                </div>

                <div className="song-card" style={{ cursor: 'default' }}>
                    <div style={{ padding: '24px', textAlign: 'left' }}>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>MEMBER SINCE</div>
                        <div style={{ fontSize: '15px', fontWeight: '600' }}>{joinDate}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;

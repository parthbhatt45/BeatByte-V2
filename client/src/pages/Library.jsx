function Library() {
    return (
        <>
            <h1 className="page-heading">Your Library</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>All your saved tracks and playlists</p>

            <div className="card-grid" style={{ gridTemplateColumns: '1fr' }}>
                <div className="song-card" style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <div style={{ fontSize: '16px', fontWeight: '600' }}>Liked Songs</div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>Your personal collection</div>
                    </div>
                    <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--accent)' }}>0</div>
                </div>
            </div>
        </>
    );
}

export default Library;

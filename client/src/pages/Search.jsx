function Search() {
    return (
        <>
            <h1 className="page-heading">Search</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>Find your favorite songs and artists</p>

            <div style={{ marginBottom: '24px' }}>
                <input
                    type="search"
                    placeholder="Search songs, artists, or albums..."
                    style={{ height: '50px' }}
                />
            </div>

            <div className="song-card" style={{ padding: '48px', textAlign: 'center' }}>
                <p style={{ color: 'var(--text-secondary)' }}>Start typing to search</p>
            </div>
        </>
    );
}

export default Search;

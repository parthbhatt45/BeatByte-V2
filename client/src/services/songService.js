const SONG_API =
    "http://localhost:5000/api/songs";

export const getSongs = async () => {
    const response = await fetch(SONG_API);

    return response.json();
};
const SONG_API =
    "https://beatbyte-v2.onrender.com/api/songs";

export const getSongs = async () => {
    const response = await fetch(SONG_API);
    return response.json();
};
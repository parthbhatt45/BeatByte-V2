import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

import {
    getStoredArray,
    setStoredArray,
} from "../utils/localStorage";

const LikedSongsContext = createContext();
const LIKED_SONGS_KEY = "likedSongs";

export function LikedSongsProvider({ children }) {
    const [likedSongs, setLikedSongs] = useState([]);

    useEffect(() => {
        setLikedSongs(getStoredArray(LIKED_SONGS_KEY));
    }, []);

    const toggleLike = (song) => {
        if (!song?._id) return;

        setLikedSongs((previousSongs) => {
            const exists = previousSongs.some(
                (item) => item._id === song._id
            );

            const updatedSongs = exists
                ? previousSongs.filter((item) => item._id !== song._id)
                : [...previousSongs, song];

            setStoredArray(LIKED_SONGS_KEY, updatedSongs);
            return updatedSongs;
        });
    };

    const isLiked = (songId) => {
        return likedSongs.some((song) => song._id === songId);
    };

    return (
        <LikedSongsContext.Provider
            value={{
                likedSongs,
                toggleLike,
                isLiked,
            }}
        >
            {children}
        </LikedSongsContext.Provider>
    );
}

export function useLikedSongs() {
    return useContext(LikedSongsContext);
}
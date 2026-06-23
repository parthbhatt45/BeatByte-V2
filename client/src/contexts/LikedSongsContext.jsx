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

export function LikedSongsProvider({ children }) {
    const [likedSongs, setLikedSongs] = useState([]);

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    const LIKED_SONGS_KEY = user?.email
        ? `likedSongs_${user.email}`
        : "likedSongs_guest";

    useEffect(() => {
        setLikedSongs(
            getStoredArray(LIKED_SONGS_KEY)
        );
    }, [LIKED_SONGS_KEY]);

    const toggleLike = (song) => {
        if (!song?._id) return;

        setLikedSongs((previousSongs) => {
            const exists = previousSongs.some(
                (item) => item._id === song._id
            );

            const updatedSongs = exists
                ? previousSongs.filter(
                    (item) =>
                        item._id !== song._id
                )
                : [...previousSongs, song];

            setStoredArray(
                LIKED_SONGS_KEY,
                updatedSongs
            );

            return updatedSongs;
        });
    };

    const isLiked = (songId) => {
        return likedSongs.some(
            (song) => song._id === songId
        );
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
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";

import {
    getStoredArray,
    setStoredArray,
} from "../utils/localStorage";

const PlayerContext = createContext();
const user = JSON.parse(
    localStorage.getItem("user")
);

const RECENTLY_PLAYED_KEY = user?.email
    ? `recentlyPlayed_${user.email}`
    : "recentlyPlayed_guest";

const MAX_RECENTLY_PLAYED = 20;

export function PlayerProvider({ children }) {
    const [songs, setSongs] = useState([]);
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const [volume, setVolumeState] = useState(100);
    const [repeat, setRepeat] = useState(false);
    const [shuffle, setShuffle] = useState(false);
    const [recentlyPlayed, setRecentlyPlayed] = useState([]);

    const audioRef = useRef(new Audio());

    useEffect(() => {
        setRecentlyPlayed(
            getStoredArray(RECENTLY_PLAYED_KEY)
        );
    }, [RECENTLY_PLAYED_KEY]);

    useEffect(() => {
        audioRef.current.volume = volume / 100;
    }, [volume]);

    const addToRecentlyPlayed = useCallback((song) => {
        if (!song?._id) return;

        setRecentlyPlayed((previousSongs) => {
            const withoutDuplicate = previousSongs.filter(
                (item) => item._id !== song._id
            );

            const updatedSongs = [
                song,
                ...withoutDuplicate,
            ].slice(0, MAX_RECENTLY_PLAYED);

            setStoredArray(RECENTLY_PLAYED_KEY, updatedSongs);
            return updatedSongs;
        });
    }, []);

    const setVolume = (value) => {
        const nextVolume = Math.min(100, Math.max(0, Number(value)));
        setVolumeState(nextVolume);
    };

    const playSong = useCallback(
        (song) => {
            if (!song?.audioUrl) return;

            const audio = audioRef.current;

            if (currentSong?._id === song._id) {
                if (isPlaying) {
                    audio.pause();
                    setIsPlaying(false);
                } else {
                    audio.play().then(() => {
                        setIsPlaying(true);
                    }).catch(console.error);
                }

                return;
            }

            audio.src = song.audioUrl;
            audio.currentTime = 0;
            audio.volume = volume / 100;

            setCurrentSong(song);
            setIsPlaying(true);
            setProgress(0);
            setCurrentTime(0);
            addToRecentlyPlayed(song);

            audio.play().catch((error) => {
                console.error("Audio playback failed", error);
                setIsPlaying(false);
            });
        },
        [
            addToRecentlyPlayed,
            currentSong,
            isPlaying,
            volume,
        ]
    );

    const togglePlay = useCallback(() => {
        const audio = audioRef.current;

        if (!currentSong) return;

        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.play().then(() => {
                setIsPlaying(true);
            }).catch(console.error);
        }
    }, [currentSong, isPlaying]);

    const stopPlayer = () => {
        const audio = audioRef.current;

        audio.pause();
        audio.currentTime = 0;
        audio.src = "";

        setCurrentSong(null);
        setIsPlaying(false);

        setProgress(0);
        setCurrentTime(0);
        setDuration(0);
    };

    const getRandomSong = useCallback(() => {
        if (!songs.length) return null;

        if (songs.length === 1) {
            return songs[0];
        }

        const availableSongs = songs.filter(
            (song) => song._id !== currentSong?._id
        );

        const randomIndex = Math.floor(
            Math.random() * availableSongs.length
        );

        return availableSongs[randomIndex];
    }, [currentSong, songs]);

    const playNext = useCallback(() => {
        if (!songs.length || !currentSong) return;

        if (shuffle) {
            const randomSong = getRandomSong();
            if (randomSong) playSong(randomSong);
            return;
        }

        const currentIndex = songs.findIndex(
            (song) => song._id === currentSong._id
        );

        const nextIndex =
            currentIndex === songs.length - 1
                ? 0
                : currentIndex + 1;

        playSong(songs[nextIndex]);
    }, [
        currentSong,
        getRandomSong,
        playSong,
        shuffle,
        songs,
    ]);

    const playPrevious = useCallback(() => {
        if (!songs.length || !currentSong) return;

        const currentIndex = songs.findIndex(
            (song) => song._id === currentSong._id
        );

        const previousIndex =
            currentIndex === 0
                ? songs.length - 1
                : currentIndex - 1;

        playSong(songs[previousIndex]);
    }, [currentSong, playSong, songs]);

    useEffect(() => {
        const audio = audioRef.current;

        const onTimeUpdate = () => {
            setCurrentTime(audio.currentTime);
            setProgress(
                audio.duration
                    ? (audio.currentTime / audio.duration) * 100
                    : 0
            );
        };

        const onLoadedMetadata = () => {
            setDuration(audio.duration || 0);
        };

        const onEnded = () => {
            if (repeat) {
                audio.currentTime = 0;
                audio.play().then(() => {
                    setIsPlaying(true);
                }).catch(console.error);
                return;
            }

            playNext();
        };

        audio.addEventListener("timeupdate", onTimeUpdate);
        audio.addEventListener("loadedmetadata", onLoadedMetadata);
        audio.addEventListener("ended", onEnded);

        return () => {
            audio.removeEventListener("timeupdate", onTimeUpdate);
            audio.removeEventListener("loadedmetadata", onLoadedMetadata);
            audio.removeEventListener("ended", onEnded);
        };
    }, [playNext, repeat]);

    const seek = (percent) => {
        const audio = audioRef.current;

        if (!audio.duration) return;

        const safePercent = Math.min(100, Math.max(0, Number(percent)));
        audio.currentTime = (safePercent / 100) * audio.duration;
    };

    const formatTime = (seconds) => {
        if (!seconds) return "0:00";

        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);

        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    return (
        <PlayerContext.Provider
            value={{
                songs,
                setSongs,

                currentSong,
                isPlaying,

                progress,
                currentTime,
                duration,

                volume,
                setVolume,

                repeat,
                setRepeat,

                shuffle,
                setShuffle,

                recentlyPlayed,

                playSong,
                togglePlay,
                stopPlayer,

                playNext,
                playPrevious,

                seek,
                formatTime,
            }}
        >
            {children}
        </PlayerContext.Provider>
    );
}

export function usePlayer() {
    return useContext(PlayerContext);
}
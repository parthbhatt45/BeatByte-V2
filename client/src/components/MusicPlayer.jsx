import {
    FaPause,
    FaPlay,
    FaRandom,
    FaRedo,
    FaStepBackward,
    FaStepForward,
    FaVolumeMute,
    FaVolumeUp,
} from "react-icons/fa";

import { usePlayer } from "../contexts/PlayerContext";

function MusicPlayer() {
    const {
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

        togglePlay,
        playNext,
        playPrevious,

        seek,
        formatTime,
    } = usePlayer();

    const handleProgressClick = (e) => {
        const bar = e.currentTarget;
        const rect = bar.getBoundingClientRect();

        const percent =
            ((e.clientX - rect.left) / rect.width) * 100;

        seek(percent);
    };

    return (
        <div className="player">
            <div className="player-song-info">
                <img
                    src={
                        currentSong?.coverImage ||
                        "https://picsum.photos/100"
                    }
                    alt={currentSong?.title || "Song"}
                    className="player-image"
                />

                <div className="player-text">
                    <div className="player-title">
                        {currentSong?.title || "No Song Playing"}
                    </div>

                    <div className="player-artist">
                        {currentSong?.artist || "Select a song"}
                    </div>
                </div>
            </div>

            <div className="player-center">
                <div className="player-controls">
                    <button
                        className={`player-btn ${shuffle ? "active" : ""}`}
                        onClick={() => setShuffle((value) => !value)}
                        disabled={!currentSong}
                        title="Shuffle"
                        type="button"
                    >
                        <FaRandom />
                    </button>

                    <button
                        className="player-btn"
                        onClick={playPrevious}
                        disabled={!currentSong}
                        title="Previous"
                        type="button"
                    >
                        <FaStepBackward />
                    </button>

                    <button
                        className="player-btn play"
                        onClick={togglePlay}
                        disabled={!currentSong}
                        title={isPlaying ? "Pause" : "Play"}
                        type="button"
                    >
                        {isPlaying ? <FaPause /> : <FaPlay />}
                    </button>

                    <button
                        className="player-btn"
                        onClick={playNext}
                        disabled={!currentSong}
                        title="Next"
                        type="button"
                    >
                        <FaStepForward />
                    </button>

                    <button
                        className={`player-btn ${repeat ? "active" : ""}`}
                        onClick={() => setRepeat((value) => !value)}
                        disabled={!currentSong}
                        title="Repeat"
                        type="button"
                    >
                        <FaRedo />
                    </button>
                </div>

                <div className="player-progress">
                    <span className="player-time">
                        {formatTime(currentTime)}
                    </span>

                    <div
                        className="progress-bar"
                        onClick={handleProgressClick}
                    >
                        <div
                            className="progress-fill"
                            style={{
                                width: `${progress}%`,
                            }}
                        />
                    </div>

                    <span className="player-time">
                        {formatTime(duration)}
                    </span>
                </div>
            </div>

            <div className="player-volume">
                {volume === 0 ? <FaVolumeMute /> : <FaVolumeUp />}

                <input
                    className="volume-slider"
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    aria-label="Volume"
                />

                <span className="volume-value">
                    {volume}
                </span>
            </div>
        </div>
    );
}

export default MusicPlayer;
import { FaPlay, FaStepBackward, FaStepForward } from 'react-icons/fa';

function MusicPlayer() {
    return (
        <div className="player">
            <div className="player-song-info">
                <img src="https://picsum.photos/56" alt="song" className="player-image" />
                <div className="player-text">
                    <div className="player-title">Blinding Lights</div>
                    <div className="player-artist">The Weeknd</div>
                </div>
            </div>

            <div className="player-controls">
                <button className="player-btn">
                    <FaStepBackward />
                </button>
                <button className="player-btn play">
                    <FaPlay />
                </button>
                <button className="player-btn">
                    <FaStepForward />
                </button>
            </div>

            <div className="player-progress">
                <div className="progress-bar">
                    <div className="progress-fill"></div>
                </div>
            </div>
        </div>
    );
}

export default MusicPlayer;

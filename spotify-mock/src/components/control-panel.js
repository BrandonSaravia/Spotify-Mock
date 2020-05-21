import React from 'react';

const ControlPanel = props => (
    <div className="control-panel">
        <div className="control-panel__panel">
            <div className="playback-track-info">
                <img className="playback-track-info__image" alt="albumn cover"></img>

                <div className="playback-track-info__description">
                    <div className="playback-track-info__track">
                        <p className="track"></p>
                    </div>

                    <div className="playback-track-info__artist">
                        <p className="artist"></p>
                    </div>
                </div>

            </div>
        </div>

        <div className="control-panel__panel">
            <div className="audio-player">
                <div className="audio-player__controls">
                    <i className="far fa-random"></i>

                    <i className="fas fa-step-backward"></i>

                    <button audio-player__controls-play> 
                        <i className="fas fa-play"></i> 
                    </button>

                    <i className="fas fa-step-forward"></i>

                    <i className="far fa-repeat-alt"></i>
                </div>

                <div className="audio-player__seek-bar">
                    <div className="audio-player__fill"></div>

                    <div className="audio-player__handle u-display-on-hover"></div>
                </div>
            </div>
        </div>

        <div className="control-panel__panel">
            <div className="volume">
                <i className="fal fa-volume-down"></i>

                <div className="volume__fill"></div>

                <div className="volume__handle u-display-on-hover"></div>
            </div>
        </div>
    </div>
)

export default ControlPanel
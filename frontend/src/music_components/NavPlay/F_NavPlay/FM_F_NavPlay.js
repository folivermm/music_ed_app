import React from 'react';
import Metronome from '../../Metronome/Metronome';
import FM_IntMusicScore from '../../MusicScore/F_IntMusicScore/FM_IntMusicScore';
import FM_MusicPlay from '../../MusicPlay/F_MusicPlay/FM_MusicPlay';
import './FM_F_NavPlay.css';
import { useMusicControl } from '../../MusicControlProvider';

const FM_F_NavPlay = () => {
    const { isPlaying, continuousPlay, playButtonDisabled, handleStop, displayRest, delay, stopAfterMeasures, handlePlayKey } = useMusicControl('F');
    const [tempo, setTempo] = React.useState(() => {
        const storedTempo = localStorage.getItem('tempo');
        return storedTempo ? parseInt(storedTempo, 10) : 60;
    });

    const handleTempoChange = (newTempo) => {
        setTempo(newTempo);
    };

    return (
        <div className="nav-play-container">
            <div className="nav-play">
                <div className="controls-container">
                    <Metronome tempo={tempo} isPlaying={isPlaying} onTempoChange={handleTempoChange} stopAfterMeasures={stopAfterMeasures} />
                    <button onClick={handleStop} disabled={!isPlaying && !continuousPlay}>Stop</button>
                    {/* <button onClick={() => handlePlayCont('F')} disabled={isPlaying || playButtonDisabled}>Play Cont</button>
                    <button onClick={() => handlePlayScale('F')} disabled={isPlaying || playButtonDisabled}>Play Scale</button> */}
                    <button onClick={() => handlePlayKey('F')} disabled={isPlaying || continuousPlay || playButtonDisabled}>
                        Play Key
                    </button>
                    <FM_MusicPlay tempo={tempo} shouldStart={isPlaying || continuousPlay} continuousPlay={continuousPlay} onStop={handleStop} />
                </div>
                <div className="music-container">
                    <FM_IntMusicScore displayRest={displayRest} tempo={tempo} shouldStart={isPlaying || continuousPlay} delay={delay} />
                </div>
            </div>
        </div>
    );
};

export default FM_F_NavPlay;
import React from 'react';
import Metronome from '../../Metronome/Metronome';
import CM_IntMusicScore from '../../MusicScore/C_IntMusicScore/CM_IntMusicScore';
import CM_MusicPlay from '../../MusicPlay/C_MusicPlay/CM_MusicPlay';
import './CM_C_NavPlay.css';
import { useMusicControl } from '../../MusicControlProvider';

const CM_C_NavPlay = () => {
    const { isPlaying, continuousPlay, playButtonDisabled, handleStop, displayRest, delay, stopAfterMeasures, handlePlayKey } = useMusicControl('C');
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
                    {/* <button onClick={() => handlePlayCont('C')} disabled={isPlaying || playButtonDisabled}>Play Cont</button>
                    <button onClick={() => handlePlayScale('C')} disabled={isPlaying || playButtonDisabled}>Play Scale</button> */}
                    <button onClick={() => handlePlayKey('C')} disabled={isPlaying || continuousPlay || playButtonDisabled}>
                        Play Key
                    </button>
                    <CM_MusicPlay tempo={tempo} shouldStart={isPlaying || continuousPlay} continuousPlay={continuousPlay} onStop={handleStop} />
                </div>
                <div className="music-container">
                    <CM_IntMusicScore displayRest={displayRest} tempo={tempo} shouldStart={isPlaying || continuousPlay} delay={delay} />
                </div>
            </div>
        </div>
    );
};

export default CM_C_NavPlay;
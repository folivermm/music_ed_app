import React, { useState, useEffect } from 'react';
import Metronome from '../../Metronome/Metronome';
import CM_IntMusicScore from '../../MusicScore/C_IntMusicScore/CM_IntMusicScore';
import CM_MusicPlay from '../../MusicPlay/C_MusicPlay/CM_MusicPlay';
import './CM_C_NavPlay.css';

const CM_C_NavPlay = () => {
    const [tempo, setTempo] = useState(() => {
        const storedTempo = localStorage.getItem('tempo');
        return storedTempo ? parseInt(storedTempo, 10) : 60;
    });

    const [isPlaying, setIsPlaying] = useState(false);
    const [continuousPlay, setContinuousPlay] = useState(false);
    const [displayRest, setDisplayRest] = useState(true);
    const [delay, setDelay] = useState(true);
    const [stopAfterMeasures, setStopAfterMeasures] = useState(null);
    const [playButtonDisabled, setPlayButtonDisabled] = useState(false);
    const [playbackEnded, setPlaybackEnded] = useState(false);

    const handleTempoChange = (newTempo) => {
        setTempo(newTempo);
    };

    const handlePlayCont = () => {
        setIsPlaying(true);
        setContinuousPlay(false);
        setDisplayRest(true);
        setDelay(true);
        setStopAfterMeasures(7);
        setPlayButtonDisabled(true);
    };

    const handlePlayScale = () => {
        setIsPlaying(true);
        setContinuousPlay(true);
        setDisplayRest(false);
        setDelay(false);
        setStopAfterMeasures(5);
        setPlayButtonDisabled(true);
    };

    const handlePlayKey = () => {
        setIsPlaying(!isPlaying);
        setContinuousPlay(false);
        setDisplayRest(true);
        setDelay(true);
        setStopAfterMeasures(7);
        setPlayButtonDisabled(true);
    };

    const handleStop = () => {
        setIsPlaying(false);
        setContinuousPlay(false);
        setPlayButtonDisabled(false);
        setPlaybackEnded(false); // Reset playbackEnded
    };

    useEffect(() => {
        setIsPlaying(false);
        setContinuousPlay(false);
        setStopAfterMeasures(null);
        setPlayButtonDisabled(false);
        setPlaybackEnded(false);
    }, []);


    return (
        <div className="nav-play-container">
            <div className="nav-play">
                <div className="controls-container">
                    <Metronome tempo={tempo} isPlaying={isPlaying} onTempoChange={handleTempoChange} stopAfterMeasures={stopAfterMeasures} />
                    <button onClick={handlePlayCont} disabled={isPlaying || playButtonDisabled}>Play Cont</button>
                    <button onClick={handlePlayScale} disabled={isPlaying || playButtonDisabled}>Play Scale</button>
                    <button onClick={handleStop} disabled={!isPlaying && !continuousPlay}>Stop</button>
                    <button onClick={handlePlayKey} disabled={isPlaying || continuousPlay || playButtonDisabled}>
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

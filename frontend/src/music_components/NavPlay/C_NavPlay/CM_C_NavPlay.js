import React, { useState, useEffect } from 'react';
import Metronome from '../../Metronome/Metronome';
import CM_IntMusicScore from '../../MusicScore/C_MusicScore/CM_IntMusicScore';
import CM_MusicPlay from '../../MusicPlay/C_MusicPlay/CM_MusicPlay';
import './CM_C_NavPlay.css';

const CM_C_NavPlay = () => {
    const [tempo, setTempo] = useState(() => {
        const storedTempo = localStorage.getItem('tempo');
        return storedTempo ? parseInt(storedTempo, 10) : 60;
    });

    const [isPlaying, setIsPlaying] = useState(false);
    const [shouldRefreshPage, setShouldRefreshPage] = useState(false);
    const [continuousPlay, setContinuousPlay] = useState(false);
    const [displayRest, setDisplayRest] = useState(true);
    const [delay, setDelay] = useState(true); // State for delay

    const handleTempoChange = (newTempo) => {
        setTempo(newTempo);
    };

    const handlePlayContToggle = () => {
        setIsPlaying(!isPlaying);
        // setShouldRefreshPage(false);
        setContinuousPlay(false);
        setDelay(true);
    };

    const handlePlayToggle = () => {
        setIsPlaying(!isPlaying);
        setShouldRefreshPage(true);
        setContinuousPlay(false);
        setDelay(true); // Setting delay to false for immediate start

    };

    const handlePlayScaleToggle = () => {
        setIsPlaying(!isPlaying);
        // setShouldRefreshPage(false);
        setContinuousPlay(true);
        setDisplayRest(false);
        setDelay(false); // Setting delay to false for immediate start
    };

    useEffect(() => {
        setIsPlaying(false);
        setShouldRefreshPage(false);
        setContinuousPlay(false);
    }, []);

    return (
        <div className="nav-play-container">
            <div className="nav-play">
                <div className="controls-container">
                    <Metronome tempo={tempo} isPlaying={isPlaying} onTempoChange={handleTempoChange} />
                    <button onClick={handlePlayContToggle}>{isPlaying ? "Stop Cont" : "Play Cont"}</button>
                    <button onClick={handlePlayScaleToggle}>{isPlaying ? "Stop Scale" : "Play Scale"}</button>
                    <button onClick={handlePlayToggle}>{isPlaying ? "Stop" : "Play Me"}</button>
                    <CM_MusicPlay tempo={tempo} shouldStart={isPlaying || continuousPlay} shouldRefreshPage={shouldRefreshPage} continuousPlay={continuousPlay} />                </div>
                <div className="music-container">
                    <CM_IntMusicScore displayRest={displayRest} tempo={tempo} shouldStart={isPlaying || continuousPlay} delay={delay} />                </div>
            </div>
        </div>
    );
};

export default CM_C_NavPlay;

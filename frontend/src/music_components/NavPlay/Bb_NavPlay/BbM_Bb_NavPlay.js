import React, { useState, useEffect } from 'react';
import Metronome from '../../Metronome/Metronome';
import BbM_IntMusicScore from '../../MusicScore/Bb_IntMusicScore/BbM_IntMusicScore';
import BbM_MusicPlay from '../../MusicPlay/Bb_MusicPlay/BbM_MusicPlay';
import './BbM_Bb_NavPlay.css';

const BbM_Bb_NavPlay = () => {
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
                    <BbM_MusicPlay tempo={tempo} shouldStart={isPlaying || continuousPlay} shouldRefreshPage={shouldRefreshPage} continuousPlay={continuousPlay} />                </div>
                <div className="music-container">
                    <BbM_IntMusicScore displayRest={displayRest} tempo={tempo} shouldStart={isPlaying || continuousPlay} delay={delay} />                </div>
            </div>
        </div>
    );
};

export default BbM_Bb_NavPlay;

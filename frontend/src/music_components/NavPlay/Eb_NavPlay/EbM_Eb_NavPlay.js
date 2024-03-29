import React, { useState, useEffect } from 'react';
import Metronome from '../../Metronome/Metronome';
import EbM_IntMusicScore from '../../MusicScore/Eb_IntMusicScore/EbM_IntMusicScore';
import EbM_MusicPlay from '../../MusicPlay/Eb_MusicPlay/EbM_MusicPlay';
import './EbM_Eb_NavPlay.css';

const EbM_Eb_NavPlay = () => {
    const [tempo, setTempo] = useState(() => {
        const storedTempo = localStorage.getItem('tempo');
        return storedTempo ? parseInt(storedTempo, 10) : 60;
    });

    const [isPlaying, setIsPlaying] = useState(false);
    const [continuousPlay, setContinuousPlay] = useState(false);
    const [displayRest, setDisplayRest] = useState(true);
    const [delay, setDelay] = useState(true);
    const [stopAfterMeasures, setStopAfterMeasures] = useState(null);

    const handleTempoChange = (newTempo) => {
        setTempo(newTempo);
    };

    const handlePlayContToggle = () => {
        setIsPlaying(!isPlaying);
        setContinuousPlay(false);
        setDelay(true);
        setStopAfterMeasures(7); // Reset stopAfterMeasures
    };

    const handlePlayToggle = () => {
        setIsPlaying(!isPlaying);
        setContinuousPlay(false);
        setDelay(true);
        setStopAfterMeasures(7); // Reset stopAfterMeasures
    };

    const handlePlayScaleToggle = () => {
        setIsPlaying(!isPlaying);
        setContinuousPlay(true);
        setDisplayRest(false);
        setDelay(false);
        setStopAfterMeasures(5); // Set stopAfterMeasures to 5
    };

    useEffect(() => {
        setIsPlaying(false);
        setContinuousPlay(false);
        setStopAfterMeasures(null); // Reset stopAfterMeasures when unmounting
    }, []);

    return (
        <div className="nav-play-container">
            <div className="nav-play">
                <div className="controls-container">
                    <Metronome tempo={tempo} isPlaying={isPlaying} onTempoChange={handleTempoChange} stopAfterMeasures={stopAfterMeasures} />
                    <button onClick={handlePlayContToggle}>{isPlaying ? "Stop Cont" : "Play Cont"}</button>
                    <button onClick={handlePlayScaleToggle}>{isPlaying ? "Stop Scale" : "Play Scale"}</button>
                    <button onClick={handlePlayToggle}>{isPlaying ? "Stop" : "Play Me"}</button>
                    <EbM_MusicPlay tempo={tempo} shouldStart={isPlaying || continuousPlay} continuousPlay={continuousPlay} />
                </div>
                <div className="music-container">
                    <EbM_IntMusicScore displayRest={displayRest} tempo={tempo} shouldStart={isPlaying || continuousPlay} delay={delay} />
                </div>
            </div>
        </div>
    );
};

export default EbM_Eb_NavPlay;

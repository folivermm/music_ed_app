import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';

const Metronome = ({ tempo: initialTempo, isPlaying, onTempoChange, stopAfterMeasures }) => {
    const [tempo, setTempo] = useState(initialTempo || 60);
    const [shouldStart, setShouldStart] = useState(false);
    const [loop, setLoop] = useState(null); // Store the loop instance

    useEffect(() => {
        // Store the tempo in local storage whenever it changes
        localStorage.setItem('tempo', tempo);
    }, [tempo]);

    //start playing metronome
    useEffect(() => {
        if (isPlaying && !shouldStart) {
            setShouldStart(true);
        } else if (!isPlaying && shouldStart) {
            setShouldStart(false); // Reset shouldStart when playback stops
        }
    }, [isPlaying, shouldStart]);

    //start loop over
    useEffect(() => {
        // Clean up function to stop the loop when unmounting or when shouldStart becomes false
        return () => {
            if (loop && shouldStart) {
                loop.stop();
            }
        };
    }, [loop, shouldStart]);

    // start with a 2 measure rest
    useEffect(() => {
        if (shouldStart) {
            handleMetronomeStart();
        }
    }, [shouldStart, stopAfterMeasures]);

    const handleMetronomeStart = async () => {
        await Tone.start();

        const membraneSynth = new Tone.MembraneSynth().toDestination();

        Tone.Transport.bpm.value = tempo;

        const newLoop = new Tone.Loop((time) => {
            // Trigger C2 for beat one, and G2 for beats 2, 3, 4
            if (Tone.Transport.position.split(':')[1] === '0') {
                membraneSynth.triggerAttackRelease('G1', '4n', time);
            } else {
                membraneSynth.triggerAttackRelease('C1', '4n', time);
            }
        }, '4n');

        setLoop(newLoop); // Store the loop instance
        newLoop.start(0); // Start the loop immediately
        Tone.Transport.start(); // Start the Transport to begin playback

        // Schedule the loop to stop after the specified number of measures
        if (stopAfterMeasures !== null) {
            Tone.Transport.scheduleOnce(() => {
                newLoop.stop();
            }, `${stopAfterMeasures}m`);
        }
    };

    const handleTempoChange = (event) => {
        const newTempo = parseInt(event.target.value, 10);
        setTempo(newTempo);
        onTempoChange(newTempo); // Notify parent component of tempo change
    };

    return (
        <div className="metronome">
            <div className="bpm-slider">
                <p>{tempo} BPM</p>
                <input
                    type="range"
                    min="30"
                    max="240"
                    value={tempo}
                    onChange={handleTempoChange}
                />
            </div>
        </div>
    );
};

export default Metronome;

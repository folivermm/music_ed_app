

// function MajorIntLayout() {
//     const startingPointRef = useRef(null);
//     const endingPointRef = useRef(null);

//     const keyComponentsFourths = {
//         "L": <CM_C_NavPlay />,
//         "M": <FM_F_NavPlay />,
//         "N": <BbM_Bb_NavPlay />,
//         "O": <EbM_Eb_NavPlay />,
//         "P": <AbM_Ab_NavPlay />,
//         "Q": <DbM_Db_NavPlay />,
//         "R": <GbM_Gb_NavPlay />,
//         "S": <BM_B_NavPlay />,
//         "T": <EM_E_NavPlay />,
//         "U": <AM_A_NavPlay />,
//         "V": <DM_D_NavPlay />,
//         "W": <GM_G_NavPlay />
//     };

//     const keyComponentsFifths = {
//         "L": <CM_C_NavPlay />,
//         "W": <GM_G_NavPlay />,
//         "V": <DM_D_NavPlay />,
//         "U": <AM_A_NavPlay />,
//         "T": <EM_E_NavPlay />,
//         "S": <BM_B_NavPlay />,
//         "R": <GbM_Gb_NavPlay />,
//         "Q": <DbM_Db_NavPlay />,
//         "P": <AbM_Ab_NavPlay />,
//         "O": <EbM_Eb_NavPlay />,
//         "N": <BbM_Bb_NavPlay />,
//         "M": <FM_F_NavPlay />,
//     };


//     const keyComponentsChromatic = {
//         "L": <CM_C_NavPlay />,
//         "Q": <DbM_Db_NavPlay />,
//         "V": <DM_D_NavPlay />,
//         "O": <EbM_Eb_NavPlay />,
//         "T": <EM_E_NavPlay />,
//         "M": <FM_F_NavPlay />,
//         "R": <GbM_Gb_NavPlay />,
//         "W": <GM_G_NavPlay />,
//         "P": <AbM_Ab_NavPlay />,
//         "U": <AM_A_NavPlay />,
//         "N": <BbM_Bb_NavPlay />,
//         "S": <BM_B_NavPlay />,
//     };


//     const [sortedKeys, setSortedKeys] = useState([]);
//     const [sortingOption, setSortingOption] = useState('fourths');

//     const handleSortingOptionChange = (sortingOption) => {
//         console.log('Selected sorting option:', sortingOption);
//         setSortingOption(sortingOption);
//     };

//     const handleSortButtonClick = () => {
//         if (sortingOption === 'fourths') {
//             handleSortForFourths();
//         } else if (sortingOption === 'chromatic') {
//             handleSortForChromatic();
//         } else if (sortingOption === 'fifths') {
//             handleSortForFifths();
//         }
//     };

//     const handleSortForFourths = () => {
//         const startingPoint = startingPointRef.current.value;
//         const endingPoint = endingPointRef.current.value;

//         // Define the order of keys in the circle of fifths based on the keyComponentsFifths object keys
//         const circleOfFourthsOrder = Object.keys(keyComponentsFourths);

//         // Find the index of the starting and ending points in the circle of fifths
//         const startIndex = circleOfFourthsOrder.indexOf(startingPoint);
//         const endIndex = circleOfFourthsOrder.indexOf(endingPoint);

//         // Extract the keys in the range from start to end, considering the circular nature of the circle of fifths
//         const keysInRange = [];
//         if (startIndex !== -1 && endIndex !== -1) {
//             if (startIndex <= endIndex) {
//                 // Case where the range does not wrap around
//                 for (let i = startIndex; i <= endIndex; i++) {
//                     keysInRange.push({ note: circleOfFourthsOrder[i], component: keyComponentsFourths[circleOfFourthsOrder[i]] });
//                 }
//             } else {
//                 // Case where the range wraps around
//                 for (let i = startIndex; i < circleOfFourthsOrder.length; i++) {
//                     keysInRange.push({ note: circleOfFourthsOrder[i], component: keyComponentsFourths[circleOfFourthsOrder[i]] });
//                 }
//                 for (let i = 0; i <= endIndex; i++) {
//                     keysInRange.push({ note: circleOfFourthsOrder[i], component: keyComponentsFourths[circleOfFourthsOrder[i]] });
//                 }
//             }
//         }

//         setSortedKeys(keysInRange.map(({ component }) => component));
//     };


//     const handleSortForFifths = () => {
//         const startingPoint = startingPointRef.current.value;
//         const endingPoint = endingPointRef.current.value;

//         // Define the order of keys in the circle of fifths based on the keyComponentsFifths object keys
//         const circleOfFifthsOrder = Object.keys(keyComponentsFifths);

//         // Find the index of the starting and ending points in the circle of fifths
//         const startIndex = circleOfFifthsOrder.indexOf(startingPoint);
//         const endIndex = circleOfFifthsOrder.indexOf(endingPoint);

//         // Extract the keys in the range from start to end, considering the circular nature of the circle of fifths
//         const keysInRange = [];
//         if (startIndex !== -1 && endIndex !== -1) {
//             if (startIndex <= endIndex) {
//                 // Case where the range does not wrap around
//                 for (let i = startIndex; i <= endIndex; i++) {
//                     keysInRange.push({ note: circleOfFifthsOrder[i], component: keyComponentsFifths[circleOfFifthsOrder[i]] });
//                 }
//             } else {
//                 // Case where the range wraps around
//                 for (let i = startIndex; i < circleOfFifthsOrder.length; i++) {
//                     keysInRange.push({ note: circleOfFifthsOrder[i], component: keyComponentsFifths[circleOfFifthsOrder[i]] });
//                 }
//                 for (let i = 0; i <= endIndex; i++) {
//                     keysInRange.push({ note: circleOfFifthsOrder[i], component: keyComponentsFifths[circleOfFifthsOrder[i]] });
//                 }
//             }
//         }

//         setSortedKeys(keysInRange.map(({ component }) => component));
//     };


//     const handleSortForChromatic = () => {
//         const startingPoint = startingPointRef.current.value;
//         const endingPoint = endingPointRef.current.value;

//         // Define the order of keys in the circle of fifths based on the keyComponentsFifths object keys
//         const circleChromatic = Object.keys(keyComponentsChromatic);

//         // Find the index of the starting and ending points in the circle of fifths
//         const startIndex = circleChromatic.indexOf(startingPoint);
//         const endIndex = circleChromatic.indexOf(endingPoint);

//         // Extract the keys in the range from start to end, considering the circular nature of the circle of fifths
//         const keysInRange = [];
//         if (startIndex !== -1 && endIndex !== -1) {
//             if (startIndex <= endIndex) {
//                 // Case where the range does not wrap around
//                 for (let i = startIndex; i <= endIndex; i++) {
//                     keysInRange.push({ note: circleChromatic[i], component: keyComponentsChromatic[circleChromatic[i]] });
//                 }
//             } else {
//                 // Case where the range wraps around
//                 for (let i = startIndex; i < circleChromatic.length; i++) {
//                     keysInRange.push({ note: circleChromatic[i], component: keyComponentsChromatic[circleChromatic[i]] });
//                 }
//                 for (let i = 0; i <= endIndex; i++) {
//                     keysInRange.push({ note: circleChromatic[i], component: keyComponentsChromatic[circleChromatic[i]] });
//                 }
//             }
//         }

//         setSortedKeys(keysInRange.map(({ component }) => component));
//     };



//     useEffect(() => {
//         handleSortButtonClick();
//     }, [sortingOption]); // Run whenever sortingOption changes

//     return (
//         <div className="MajorIntLayout">
//             <NavSortBar
//                 startingPointRef={startingPointRef}
//                 endingPointRef={endingPointRef}
//                 onSortingOptionChange={handleSortingOptionChange}
//                 onSortButtonClick={handleSortButtonClick}
//             />
//             <div className="sorted-keys">
//                 {sortedKeys.map((key, index) => (
//                     <div key={index}>{key}</div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default MajorIntLayout;











// function MajorIntLayout() {
//     // Define the ref for starting and ending points
//     const startingPointRef = useRef(null);
//     const endingPointRef = useRef(null);

//     // Map each note name to its corresponding component
//     const keyComponents = {
//         "L": <CM_C_NavPlay />,
//         "M": <FM_F_NavPlay />,
//         "N": <BbM_Bb_NavPlay />,
//         "O": <EbM_Eb_NavPlay />,
//         "P": <AbM_Ab_NavPlay />,
//         "Q": <DbM_Db_NavPlay />,
//         "R": <GbM_Gb_NavPlay />,
//         "S": <BM_B_NavPlay />,
//         "T": <EM_E_NavPlay />,
//         "U": <AM_A_NavPlay />,
//         "V": <DM_D_NavPlay />,
//         "W": <GM_G_NavPlay />
//     };

//     const [sortedKeys, setSortedKeys] = useState([]);
//     const handleSortButtonClick = () => {
//         // Get the selected starting and ending points from the refs
//         const startingPoint = startingPointRef.current.value;
//         const endingPoint = endingPointRef.current.value;

//         // Get the starting and ending char codes
//         const startCharCode = startingPoint.charCodeAt(0);
//         const endCharCode = endingPoint.charCodeAt(0);

//         // Get the keys between the starting and ending points
//         const keysInRange = Object.entries(keyComponents).reduce((acc, [note, component]) => {
//             const noteCharCode = note.charCodeAt(0);
//             // Check if the current note is within the range or wrapping around
//             if ((startCharCode <= endCharCode && noteCharCode >= startCharCode && noteCharCode <= endCharCode) ||
//                 (startCharCode > endCharCode && (noteCharCode >= startCharCode || noteCharCode <= endCharCode))) {
//                 acc.push({ note, component });
//             }
//             return acc;
//         }, []);

//         // Find the index of the starting point in the keysInRange array
//         let startIndex = 0;
//         for (let i = 0; i < keysInRange.length; i++) {
//             if (keysInRange[i].note === startingPoint) {
//                 startIndex = i;
//                 break;
//             }
//         }

//         // Reorder the keys to start from the starting point and end at the ending point
//         const reorderedKeys = [...keysInRange.slice(startIndex), ...keysInRange.slice(0, startIndex)];

//         // Update the sorted keys state with the reordered keys
//         setSortedKeys(reorderedKeys.map(({ component }) => component));
//     };


//     useEffect(() => {
//         // Set initial sorted keys when the component mounts
//         handleSortButtonClick();
//     }, []); // Run only once after initial render




















































































// <option value="W">G</option>
// <option value="V">D</option>
// <option value="U">A</option>
// <option value="T">E</option>
// <option value="S">B</option>
// <option value="R">Gb/F#</option>
// <option value="Q">Db/C#</option>
// <option value="P">Ab</option>
// <option value="O">Eb</option>
// <option value="N">Bb</option>
// <option value="M">F</option>
// <option value="L">C</option>


// "L": <CM_C_NavPlay />,
// "M": <DbM_Db_NavPlay />,
// "N": <DM_D_NavPlay />,
// "O": <EbM_Eb_NavPlay />,
// "P": <EM_E_NavPlay />,
// "Q": <FM_F_NavPlay />,
// "R": <GbM_Gb_NavPlay />,
// "S": <GM_G_NavPlay />,
// "T": <AbM_Ab_NavPlay />,
// "U": <AM_A_NavPlay />,
// "V": <BbM_Bb_NavPlay />,
// "W": <BM_B_NavPlay />,


// sixths: {
//     "L": <CM_C_NavPlay />,
//     "U": <AM_A_NavPlay />,
//     "R": <GbM_Gb_NavPlay />,
//     "O": <EbM_Eb_NavPlay />,

//     "N": <BbM_Bb_NavPlay />,
//     "W": <GM_G_NavPlay />,
//     "T": <EM_E_NavPlay />,
//     "Q": <DbM_Db_NavPlay />,

//     "P": <AbM_Ab_NavPlay />,
//     "M": <FM_F_NavPlay />,
//     "V": <DM_D_NavPlay />,
//     "S": <BM_B_NavPlay />,
// },


// sevenths: {
//     "L": <CM_C_NavPlay />,
//     "S": <BM_B_NavPlay />,
//     "N": <BbM_Bb_NavPlay />,
//     "U": <AM_A_NavPlay />,
//     "P": <AbM_Ab_NavPlay />,
//     "W": <GM_G_NavPlay />,
//     "R": <GbM_Gb_NavPlay />,
//     "M": <FM_F_NavPlay />,
//     "T": <EM_E_NavPlay />,
//     "O": <EbM_Eb_NavPlay />,
//     "Q": <DbM_Db_NavPlay />,
//     "V": <DM_D_NavPlay />,
// },


// <button onClick={handlePlayContToggle}>{isPlaying ? "Stop Cont" : "Play Cont"}</button>
// <button onClick={handlePlayScaleToggle}>{isPlaying ? "Stop Scale" : "Play Scale"}</button>






















































































// import React, { useState, useEffect } from 'react';
// import abcjs from 'abcjs';
// import * as Tone from 'tone';

// const MusicScore = () => {
//     const [abcNotation, setAbcNotation] = useState('X:1\nT:Untitled 1\nC:Unknown composer\nM:4/4\nL:1/4\nQ:1/4=120\nK:C\nC/2D/2E/2F/2 G/2A/2B/2C\'/2 | D\'/C\'/B/2A/2 G/2F/2E/2D/  :|C4 ||');
//     const storedTempo = localStorage.getItem('tempo');

//     const [tempo, setTempo] = useState(storedTempo ? parseInt(storedTempo, 10) : 65); // Initial tempo

//     useEffect(() => {
//         const element = document.getElementById('paper');
//         abcjs.renderAbc(element, abcNotation);

//         const synth = new Tone.Synth().toDestination();
//         Tone.Transport.bpm.value = tempo;
//         const notes = [
//             { pitch: 'C4', timing: '0:0' },
//             { pitch: 'D4', timing: '0:1' },
//             { pitch: 'E4', timing: '0:2' },
//             { pitch: 'F4', timing: '0:3' },
//             { pitch: 'G4', timing: '0:4' },
//             { pitch: 'A4', timing: '0:5' },
//             { pitch: 'B4', timing: '0:6' },
//             { pitch: 'C5', timing: '0:7' },
//             { pitch: 'D5', timing: '0:8' },
//             { pitch: 'C5', timing: '0:9' },
//             { pitch: 'B4', timing: '0:10' },
//             { pitch: 'A4', timing: '0:11' },
//             { pitch: 'G4', timing: '0:12' },
//             { pitch: 'F4', timing: '0:13' },
//             { pitch: 'E4', timing: '0:14' },
//             { pitch: 'D4', timing: '0:15' },
//         ];

//         let iterations = 0;

//         const loop = new Tone.Loop((time) => {
//             const currentNote = notes[Math.floor(time / Tone.Time('8n').toSeconds()) % notes.length];

//             if (currentNote.pitch === 'C4' && iterations < 3) {
//                 // If it's the C4 note and less than 3 iterations, play the note
//                 if (iterations === 2) {
//                     // If it's the third iteration, stop the loop
//                     loop.stop();
//                     Tone.Transport.stop();
//                     Tone.Transport.cancel();
//                     setTimeout(() => {
//                         window.location.reload();
//                     }, 5000);
//                 }
//                 synth.triggerAttackRelease(currentNote.pitch, '1m', time);
//                 iterations++;
//             } else {
//                 synth.triggerAttackRelease(currentNote.pitch, '8n', time);
//             }
//         }, '8n');

//         document.getElementById('playButton')?.addEventListener('click', async () => {
//             // Start the Tone context if not already started
//             await Tone.start();

//             // Start the loop when the play button is clicked
//             loop.start(0);
//             Tone.Transport.start();
//         });

//         return () => {
//             // Stop the loop and Transport when the component is unmounted
//             loop.stop();
//             Tone.Transport.stop();
//             Tone.Transport.cancel();
//         };
//     }, [abcNotation]);

//     const handleTempoChange = (event) => {
//         const newTempo = event.target.value;
//         setTempo(newTempo);
//         Tone.Transport.bpm.value = newTempo;
//         localStorage.setItem('tempo', newTempo);
//     };

//     return (
//         <div>
//             <h2>Music Score</h2>
//             <div id="paper"></div>
//             <div>
//                 <button id="playButton">Play C Major Scale</button>
//                 <label>
//                     Tempo:
//                     <input type="number" value={tempo} onChange={handleTempoChange} />
//                 </label>
//             </div>
//         </div>
//     );
// };

// export default MusicScore;




// import React, { useState, useEffect } from 'react';
// import Metronome from '../Metronome/Metronome';
// import MusicPlay from '../MusicPlay/MusicPlay';
// import './NavPlay.css'




// const NavPlay = () => {
//     const [isPlaying, setIsPlaying] = useState(false);
//     const [tempo, setTempo] = useState(() => {
//         const storedTempo = localStorage.getItem('tempo');
//         return storedTempo ? parseInt(storedTempo, 10) : 60; // Start at 60 if tempo is not stored
//     });

//     useEffect(() => {
//         localStorage.setItem('tempo', tempo); // Save tempo to local storage whenever it changes
//     }, [tempo]);

//     const handleTempoChange = (newTempo) => {
//         setTempo(newTempo);
//     };

//     const handlePlay = () => {
//         setIsPlaying(!isPlaying); // Toggle play state
//     };

//     return (
//         <div className="nav-play-container">
//             <div className="nav-play">
//                 <Metronome tempo={tempo} onTempoChange={handleTempoChange} /> {/* Pass tempo and handler */}
//                 <button onClick={handlePlay}>{isPlaying ? 'Pause' : 'Play'}</button> {/* Toggle play/pause */}
//                 {isPlaying && <MusicPlay tempo={tempo} />} {/* Render MusicPlay component when isPlaying is true */}
//             </div>
//         </div>
//     );
// };

// export default NavPlay;



// Metronome.js
// import React, { useState } from 'react';

// const Metronome = ({ tempo: initialTempo, onTempoChange }) => {
//     const [tempo, setTempo] = useState(initialTempo || 60); // Initial tempo set to 60 if not provided

//     const handleTempoChange = (event) => {
//         const newTempo = parseInt(event.target.value, 10);
//         setTempo(newTempo);
//         onTempoChange(newTempo); // Notify parent component of tempo change
//     };

//     return (
//         <div className="metronome">
//             <div className="bpm-slider">
//                 <p>{tempo} BPM</p>
//                 <input type="range" min="30" max="240" value={tempo} onChange={handleTempoChange} />
//             </div>
//         </div>
//     );
// };

// export default Metronome;


// MusicPlay.js
// import React, { useState } from 'react';
// import * as Tone from 'tone';

// const MusicPlay = ({ tempo }) => {
//     const [musicStarted, setMusicStarted] = useState(false);

//     const handleMusicStart = async () => {
//         // Start the Tone context if not already started
//         await Tone.start();

//         // Set up Tone.js synth and loop
//         const synth = new Tone.Synth().toDestination();
//         Tone.Transport.bpm.value = tempo;
//         const notes = [
//             { pitch: 'C4', timing: '0:0' },
//             { pitch: 'D4', timing: '0:1' },
//             { pitch: 'E4', timing: '0:2' },
//             { pitch: 'F4', timing: '0:3' },
//             { pitch: 'G4', timing: '0:4' },
//             { pitch: 'A4', timing: '0:5' },
//             { pitch: 'B4', timing: '0:6' },
//             { pitch: 'C5', timing: '0:7' },
//             { pitch: 'D5', timing: '0:8' },
//             { pitch: 'C5', timing: '0:9' },
//             { pitch: 'B4', timing: '0:10' },
//             { pitch: 'A4', timing: '0:11' },
//             { pitch: 'G4', timing: '0:12' },
//             { pitch: 'F4', timing: '0:13' },
//             { pitch: 'E4', timing: '0:14' },
//             { pitch: 'D4', timing: '0:15' },
//         ];

//         let iterations = 0;
//         const loop = new Tone.Loop((time) => {
//             const currentNote = notes[Math.floor(time / Tone.Time('8n').toSeconds()) % notes.length];

//             if (currentNote.pitch === 'C4' && iterations < 3) {
//                 if (iterations === 2) {
//                     loop.stop();
//                     Tone.Transport.stop();
//                     Tone.Transport.cancel();
//                     setTimeout(() => {
//                         window.location.reload();
//                     }, 5000);
//                 }
//                 synth.triggerAttackRelease(currentNote.pitch, '1m', time);
//                 iterations++;
//             } else {
//                 synth.triggerAttackRelease(currentNote.pitch, '8n', time);
//             }
//         }, '8n');

//         loop.start(0);
//         Tone.Transport.start();
//         setMusicStarted(true);
//     };

//     if (!musicStarted) {
//         handleMusicStart();
//     }

//     return null; // No need to render anything in this component
// };

// export default MusicPlay;

































// import React, { useEffect } from 'react';
// import abcjs from 'abcjs';
// import './MusicScore.css'; // Import the CSS file

// const MusicScore = ({ displayRest }) => {
//     useEffect(() => {
//         let abcNotation = 'X:1\nT:Untitled 1\nC:Unknown composer\nM:4/4\nL:1/4\nQ:1/4=120\nK:C\n';

//         if (displayRest) {
//             // If displayRest is true, add two measures of rest and a barline before the scale notation
//             abcNotation += 'z4 | z4 | ';
//         }

//         abcNotation += 'C/2D/2E/2F/2 G/2A/2B/2C\'/2 | D\'/C\'/B/2A/2 G/2F/2E/2D/  :|C4 ||';

//         const element = document.getElementById('paper');
//         abcjs.renderAbc(element, abcNotation, {
//             // Callback function to customize rendering options
//             add_classes: true
//         });
//     }, [displayRest]);

//     return (
//         <div>
//             <h2>Music Score</h2>
//             <div id="paper"></div>
//         </div>
//     );
// };

// export default MusicScore;











// import React, { useEffect, useState, useRef } from 'react';
// import abcjs from 'abcjs';

// const MusicScore = ({ displayRest, tempo, shouldStart }) => {
//     const [highlightedNoteIndex, setHighlightedNoteIndex] = useState(-1);
//     const [loopCount, setLoopCount] = useState(0);
//     const [isPlaying, setIsPlaying] = useState(false);
//     const svgRef = useRef(null);
//     const totalNotes = 16; // Total number of notes in the scale

//     const [tempHighlightedNoteIndex, setTempHighlightedNoteIndex] = useState(-1);

//     useEffect(() => {
//         setIsPlaying(shouldStart);
//         setLoopCount(0);
//         setHighlightedNoteIndex(-1); // Set the initial highlighted note index to -1
//     }, [shouldStart]);

//     useEffect(() => {
//         if (isPlaying) {
//             let index = 0;
//             const beatsPerSecond = tempo / 29.35; // Calculate beats per second
//             const delayDuration = (16 / beatsPerSecond) * 1000; // Delay duration in milliseconds

//             // Set timeout for the delay
//             const delayTimeout = setTimeout(() => {
//                 // Start highlighting notes after the delay
//                 const intervalId = setInterval(() => {
//                     setTempHighlightedNoteIndex(index);

//                     index++;

//                     // Check if we reached the end of the scale
//                     if (index === totalNotes) {
//                         setLoopCount(prevCount => {
//                             // Increment loop count
//                             const newCount = prevCount + 1;

//                             // If it's the second loop, stop the interval and playing
//                             if (newCount >= 2) {
//                                 // Change the color of the second-to-last note to black
//                                 const notes = svgRef.current.querySelectorAll('.abcjs-note');
//                                 notes[totalNotes - 1].style.fill = 'black';

//                                 clearInterval(intervalId); // Stop after two loops
//                                 setIsPlaying(false); // Stop playing
//                                 setHighlightedNoteIndex(totalNotes - 0); // Highlight the whole note at the end
//                             } else {
//                                 index = 0; // Reset index to loop
//                             }

//                             return newCount;
//                         });
//                     }
//                 }, 1000 / beatsPerSecond); // Interval to highlight notes based on tempo
//             }, delayDuration);

//             return () => {
//                 clearTimeout(delayTimeout);
//             };
//         }
//     }, [isPlaying, tempo]);


//     useEffect(() => {
//         const svg = svgRef.current;
//         if (!svg) return;

//         const notes = svg.querySelectorAll('.abcjs-note');
//         notes.forEach((note, index) => {
//             if (index === tempHighlightedNoteIndex || index === highlightedNoteIndex) {
//                 note.style.fill = 'red';
//             } else {
//                 note.style.fill = 'black';
//             }
//         });
//     }, [tempHighlightedNoteIndex, highlightedNoteIndex, isPlaying]); // Re-run effect when highlightedNoteIndex or isPlaying changes

//     useEffect(() => {
//         renderMusicScore();
//     }, [displayRest, tempo]);
//     const renderMusicScore = () => {
//         let abcNotation = 'X:1\nT:Untitled 1\nC:Unknown composer\nM:4/4\nL:1/4\nQ:1/4=120\nK:C\n';

//         if (displayRest) {
//             abcNotation += 'z4 | z4 |: ';
//         }

//         abcNotation += 'C/2D/2E/2F/2 G/2A/2B/2C\'/2 | D\'/C\'/B/2A/2 G/2F/2E/2D/  :|C4 ||';

//         const element = document.getElementById('paper');
//         abcjs.renderAbc(element, abcNotation, {
//             add_classes: true,
//         });
//     };
//     return (
//         <div>
//             <h2>Music Score</h2>
//             <div id="paper" ref={svgRef}></div>
//         </div>
//     );
// };

// export default MusicScore;

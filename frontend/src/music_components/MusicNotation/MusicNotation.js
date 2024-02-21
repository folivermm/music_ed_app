
// import React from 'react';
// import MusicScore from '../MusicScore/MusicScore'
// function MusicNotation({ tempo, isPlaying }) {
//     return (
//         <div>
//             <MusicScore displayRest={true} tempo={tempo} shouldStart={isPlaying} />
//         </div>
//     )
// }

// export default MusicNotation

// import React, { useEffect } from 'react';
// import abcjs from 'abcjs';

// const MusicNotation = ({ displayRest }) => {
//     useEffect(() => {
//         renderMusicScore(displayRest);
//     }, [displayRest]);

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
//             <div id="paper"></div>
//         </div>
//     );
// };

// export default MusicNotation;

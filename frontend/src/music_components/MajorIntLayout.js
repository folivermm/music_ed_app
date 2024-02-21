// import React, { useState, useRef } from 'react';
// import CM_C_NavPlay from './NavPlay/C_NavPlay/CM_C_NavPlay';
// import FM_F_NavPlay from './NavPlay/F_NavPlay/FM_F_NavPlay';
// import BbM_Bb_NavPlay from './NavPlay/Bb_NavPlay/BbM_Bb_NavPlay';

// // Import other scale components as needed

// const MajorIntLayout = () => {
//     const [isPlaying, setIsPlaying] = useState(false);

//     const handlePlayToggle = () => {
//         setIsPlaying(!isPlaying);
//     };
//     // Array to hold references to scale components
//     const scaleRefs = useRef([]);

//     // Function to handle playback of the next scale
//     const handlePlayNextScale = (currentScaleIndex) => {
//         // Calculate the index of the next scale
//         const nextScaleIndex = (currentScaleIndex + 1) % scaleRefs.current.length;

//         // Trigger playback of the next scale
//         if (scaleRefs.current[nextScaleIndex] && scaleRefs.current[nextScaleIndex].current) {
//             scaleRefs.current[nextScaleIndex].current.handlePlayToggle();
//         }
//     };

//     return (
//         <div className="MajorIntLayout">
//             <div>
//                 <CM_C_NavPlay onPlayToggle={handlePlayToggle} />
//             </div>
//             <div>
//                 <FM_F_NavPlay />
//             </div>
//             <div>
//                 <BbM_Bb_NavPlay />
//             </div>

//             <CM_C_NavPlay onPlayToggle={handlePlayToggle} ref={(ref) => (scaleRefs.current[0] = ref)} onPlayNextScale={() => handlePlayNextScale(0)} />
//             <FM_F_NavPlay ref={(ref) => (scaleRefs.current[1] = ref)} onPlayNextScale={() => handlePlayNextScale(1)} />
//             <BbM_Bb_NavPlay ref={(ref) => (scaleRefs.current[2] = ref)} onPlayNextScale={() => handlePlayNextScale(1)} />
//         </div>
//     );
// };

// export default MajorIntLayout;






import React, { useState } from 'react';
import CM_C_NavPlay from './NavPlay/C_NavPlay/CM_C_NavPlay';
import FM_F_NavPlay from './NavPlay/F_NavPlay/FM_F_NavPlay';
import BbM_Bb_NavPlay from './NavPlay/Bb_NavPlay/BbM_Bb_NavPlay';
import EbM_Eb_NavPlay from './NavPlay/Eb_NavPlay/EbM_Eb_NavPlay';
import './MajorIntLayout.css'

function MajorIntLayout() {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayToggle = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="MajorIntLayout">
            <div>
                <CM_C_NavPlay />
            </div>
            <div>
                <FM_F_NavPlay />
            </div>
            <div>
                <BbM_Bb_NavPlay />
            </div>
            <div>
                <EbM_Eb_NavPlay />
            </div>
        </div>
    );
}

export default MajorIntLayout;

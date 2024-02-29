import React, { useState, useRef, useEffect } from 'react';
import CM_C_NavPlay from './NavPlay/C_NavPlay/CM_C_NavPlay';
import FM_F_NavPlay from './NavPlay/F_NavPlay/FM_F_NavPlay';
import BbM_Bb_NavPlay from './NavPlay/Bb_NavPlay/BbM_Bb_NavPlay';
import EbM_Eb_NavPlay from './NavPlay/Eb_NavPlay/EbM_Eb_NavPlay';
import AbM_Ab_NavPlay from './NavPlay/Ab_NavPlay/AbM_Ab_NavPlay';
import DbM_Db_NavPlay from './NavPlay/Db_NavPlay/DbM_Db_NavPlay';
import GbM_Gb_NavPlay from './NavPlay/Gb_NavPlay/GbM_Gb_NavPlay';
import BM_B_NavPlay from './NavPlay/B_NavPlay/BM_B_NavPlay';
import EM_E_NavPlay from './NavPlay/E_NavPlay/EM_E_NavPlay';
import AM_A_NavPlay from './NavPlay/A_NavPlay/AM_A_NavPlay';
import DM_D_NavPlay from './NavPlay/D_NavPlay/DM_D_NavPlay';
import GM_G_NavPlay from './NavPlay/G_NavPlay/GM_G_NavPlay';
import NavSortBar from '../NavSortBar/NavSortBar';
import { MusicControlProvider } from './MusicControlProvider'; // Adjust the import path accordingly

import './MajorIntLayout.css';

function MajorIntLayout() {
    const startingPointRef = useRef(null);
    const endingPointRef = useRef(null);

    const keyComponents = {
        fourths: {
            "L": <CM_C_NavPlay />,
            "M": <FM_F_NavPlay />,
            "N": <BbM_Bb_NavPlay />,
            "O": <EbM_Eb_NavPlay />,
            "P": <AbM_Ab_NavPlay />,
            "Q": <DbM_Db_NavPlay />,
            "R": <GbM_Gb_NavPlay />,
            "S": <BM_B_NavPlay />,
            "T": <EM_E_NavPlay />,
            "U": <AM_A_NavPlay />,
            "V": <DM_D_NavPlay />,
            "W": <GM_G_NavPlay />
        },
        fifths: {
            "L": <CM_C_NavPlay />,
            "W": <GM_G_NavPlay />,
            "V": <DM_D_NavPlay />,
            "U": <AM_A_NavPlay />,
            "T": <EM_E_NavPlay />,
            "S": <BM_B_NavPlay />,
            "R": <GbM_Gb_NavPlay />,
            "Q": <DbM_Db_NavPlay />,
            "P": <AbM_Ab_NavPlay />,
            "O": <EbM_Eb_NavPlay />,
            "N": <BbM_Bb_NavPlay />,
            "M": <FM_F_NavPlay />,
        },
        sevenths: {
            "L": <CM_C_NavPlay />,
            "S": <BM_B_NavPlay />,
            "N": <BbM_Bb_NavPlay />,
            "U": <AM_A_NavPlay />,
            "P": <AbM_Ab_NavPlay />,
            "W": <GM_G_NavPlay />,
            "R": <GbM_Gb_NavPlay />,
            "M": <FM_F_NavPlay />,
            "T": <EM_E_NavPlay />,
            "O": <EbM_Eb_NavPlay />,
            "Q": <DbM_Db_NavPlay />,
            "V": <DM_D_NavPlay />,
        },
        chromatic: {
            "L": <CM_C_NavPlay />,
            "Q": <DbM_Db_NavPlay />,
            "V": <DM_D_NavPlay />,
            "O": <EbM_Eb_NavPlay />,
            "T": <EM_E_NavPlay />,
            "M": <FM_F_NavPlay />,
            "R": <GbM_Gb_NavPlay />,
            "W": <GM_G_NavPlay />,
            "P": <AbM_Ab_NavPlay />,
            "U": <AM_A_NavPlay />,
            "N": <BbM_Bb_NavPlay />,
            "S": <BM_B_NavPlay />,
        }
    };

    const [sortedKeys, setSortedKeys] = useState([]);
    const [sortingOption, setSortingOption] = useState('fourths');

    const handleSortingOptionChange = (sortingOption) => {
        console.log('Selected sorting option:', sortingOption);
        setSortingOption(sortingOption);
    };

    const handleSortButtonClick = () => {
        handleSortFor(keyComponents[sortingOption]);
    };

    const handleSortFor = (keyComponents) => {
        const startingPoint = startingPointRef.current.value;
        const endingPoint = endingPointRef.current.value;

        const circleOrder = Object.keys(keyComponents);
        const startIndex = circleOrder.indexOf(startingPoint);
        const endIndex = circleOrder.indexOf(endingPoint);

        const keysInRange = [];
        if (startIndex !== -1 && endIndex !== -1) {
            if (startIndex <= endIndex) {
                for (let i = startIndex; i <= endIndex; i++) {
                    keysInRange.push({ note: circleOrder[i], component: keyComponents[circleOrder[i]] });
                }
            } else {
                for (let i = startIndex; i < circleOrder.length; i++) {
                    keysInRange.push({ note: circleOrder[i], component: keyComponents[circleOrder[i]] });
                }
                for (let i = 0; i <= endIndex; i++) {
                    keysInRange.push({ note: circleOrder[i], component: keyComponents[circleOrder[i]] });
                }
            }
        }

        setSortedKeys(keysInRange.map(({ component }) => component));
    };

    useEffect(() => {
        handleSortButtonClick();
    }, [sortingOption]);

    return (
        <MusicControlProvider>
            <div className="MajorIntLayout">
                <NavSortBar
                    startingPointRef={startingPointRef}
                    endingPointRef={endingPointRef}
                    onSortingOptionChange={handleSortingOptionChange}
                    onSortButtonClick={handleSortButtonClick}
                />
                <div className="sorted-keys">
                    {sortedKeys.map((key, index) => (
                        <div key={index}>{key}</div>
                    ))}
                </div>
            </div>
        </MusicControlProvider>
    );
}

export default MajorIntLayout;
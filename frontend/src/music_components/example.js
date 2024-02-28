
// function MajorIntLayout() {
//     const startingPointRef = useRef(null);
//     const endingPointRef = useRef(null);

//     const keyComponents = {
//         fourths: {
//             "L": <CM_C_NavPlay />,
//             "M": <FM_F_NavPlay />,
//             "N": <BbM_Bb_NavPlay />,
//             "O": <EbM_Eb_NavPlay />,
//             "P": <AbM_Ab_NavPlay />,
//             "Q": <DbM_Db_NavPlay />,
//             "R": <GbM_Gb_NavPlay />,
//             "S": <BM_B_NavPlay />,
//             "T": <EM_E_NavPlay />,
//             "U": <AM_A_NavPlay />,
//             "V": <DM_D_NavPlay />,
//             "W": <GM_G_NavPlay />
//         },

//         chromatic: {
//             "L": <CM_C_NavPlay />,
//             "Q": <DbM_Db_NavPlay />,
//             "V": <DM_D_NavPlay />,
//             "O": <EbM_Eb_NavPlay />,
//             "T": <EM_E_NavPlay />,
//             "M": <FM_F_NavPlay />,
//             "R": <GbM_Gb_NavPlay />,
//             "W": <GM_G_NavPlay />,
//             "P": <AbM_Ab_NavPlay />,
//             "U": <AM_A_NavPlay />,
//             "N": <BbM_Bb_NavPlay />,
//             "S": <BM_B_NavPlay />,
//         }
//     };

//     const [sortedKeys, setSortedKeys] = useState([]);
//     const [sortingOption, setSortingOption] = useState('fourths');

//     const handleSortingOptionChange = (sortingOption) => {
//         console.log('Selected sorting option:', sortingOption);
//         setSortingOption(sortingOption);
//     };

//     const handleSortButtonClick = () => {
//         handleSortFor(keyComponents[sortingOption]);
//     };

//     const handleSortFor = (keyComponents) => {
//         const startingPoint = startingPointRef.current.value;
//         const endingPoint = endingPointRef.current.value;

//         const circleOrder = Object.keys(keyComponents);
//         const startIndex = circleOrder.indexOf(startingPoint);
//         const endIndex = circleOrder.indexOf(endingPoint);

//         const keysInRange = [];
//         if (startIndex !== -1 && endIndex !== -1) {
//             if (startIndex <= endIndex) {
//                 for (let i = startIndex; i <= endIndex; i++) {
//                     keysInRange.push({ note: circleOrder[i], component: keyComponents[circleOrder[i]] });
//                 }
//             } else {
//                 for (let i = startIndex; i < circleOrder.length; i++) {
//                     keysInRange.push({ note: circleOrder[i], component: keyComponents[circleOrder[i]] });
//                 }
//                 for (let i = 0; i <= endIndex; i++) {
//                     keysInRange.push({ note: circleOrder[i], component: keyComponents[circleOrder[i]] });
//                 }
//             }
//         }

//         setSortedKeys(keysInRange.map(({ component }) => component));
//     };

//     useEffect(() => {
//         handleSortButtonClick();
//     }, [sortingOption]);

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
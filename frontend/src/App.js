import React from 'react';
import MajorIntLayout from './music_components/MajorIntLayout';
import { MusicControlProvider } from './music_components/MusicControlProvider';
function App() {
  return (
    <MusicControlProvider>
      <div className="App">
        <MajorIntLayout />
      </div>
    </MusicControlProvider>
  );

}

export default App;

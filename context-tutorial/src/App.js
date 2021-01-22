import React from 'react';
import ColorBox from './components/ColorBox';

import {ColorProvider} from './contexts/color';

import SelectColors from './components/SelectColors';

function App() {
  return (
    // <ColorContext.Provider value={{color: 'red'}}>
    <ColorProvider>
      <div>
        <SelectColors/>
        <ColorBox />
      </div>
    </ColorProvider>
    // </ColorContext.Provider>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import './App.css';

import { FlikrPicture } from './types';
import Picture from './components/Picture';

const flikrURL = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json'

function App() {
  return (
    <div className="App">
      <div className="bg-gray-100 flex justify-center flex-col">
        <h1 className="text-5xl text-black">Flikr Finder</h1>

      </div>
    </div>
  );
}

export default App;

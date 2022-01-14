import React, { useEffect, useState } from 'react';
import {DebounceInput} from 'react-debounce-input';

import './App.css';

import { FlikrPicture } from './types';
import { fetchFlikrPictures } from './utils/Flikr';

import Picture from './components/Picture';

function App() {
  const [pictures, setPictures] = useState([])
  const [searchQuery, setSearchQuery] = useState('puppy')

  useEffect(() => {
    const getPictures = async () => {
      setPictures(await fetchFlikrPictures(searchQuery))
    }

    getPictures()
  }, [searchQuery])

  return (
    <div className="App">
      <div className="bg-gray-100 flex justify-center flex-col">
        <h1 className="text-5xl text-black">Flikr Finder</h1>
        <h3 className="text-2xl text-gray-500	">Explore through tags, they're clickable!</h3>

        <DebounceInput
          className="m-3 p-1 text-center"
          placeholder="Search Flickr Photos"
          debounceTimeout={300}
          onChange={e => setSearchQuery(e.target.value)}
          value={searchQuery}
        />

        <div className="p-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {pictures.map((picture: FlikrPicture, i) =>
            <Picture key={i} picture={picture} setSearchQuery={setSearchQuery} />)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
